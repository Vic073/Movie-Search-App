// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => onClick(movie)}
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="text-xl font-semibold text-white">{movie.Title}</h3>
      <p className="text-gray-400">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
