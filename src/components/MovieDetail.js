// src/components/MovieDetail.js
import React from 'react';

const MovieDetail = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full h-auto max-h-screen overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black-500">
          x
        </button>
        <h2 className="text-3xl font-bold mb-4">{movie.Title}</h2>
        <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-full mb-4 rounded" />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
      </div>
    </div>
  );
};

export default MovieDetail;




