// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const searchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=7b5599ea`
      );
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setSearchHistory((prev) => [...new Set([query, ...prev])]);
      } else {
        setError(response.data.Error);
      }
    } catch {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = async (movie) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=7b5599ea`
    );
    setSelectedMovie(response.data);
  };

  const closeMovieDetail = () => setSelectedMovie(null);

  return (
    <div className="app p-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
        Movie Search App 🎬
      </h1>

      <SearchForm onSearch={searchMovies} />
      {loading && <div className="loading-spinner mx-auto my-6"></div>}
      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="text-gray-400 mb-4">Search History:</div>
      <div className="search-history flex space-x-2">
  {searchHistory.map((term) => (
    <span
      key={term}
      className="bg-gray-800 px-3 py-1 rounded text-sm cursor-pointer hover:bg-gray-600"
      onClick={() => searchMovies(term)}
    >
      {term}
    </span>
  ))}
</div>


      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={closeMovieDetail} />
      )}
    </div>
  );
};

export default App;
