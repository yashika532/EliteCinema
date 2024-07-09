import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ title, movies, searchMovie = false }) => {
  return (
    <div className='px-8'>
      <h1 className={`${searchMovie ? "text-black":"text-white"} text-3xl py-4 `}>{title}</h1>
      <div className='overflow-x-auto no-scrollbar cursor-pointer flex'>
        <div className='flex items-center'>
          {
            movies && movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard key={movie.id} movieId = {movie.id}  posterPath={movie.poster_path} />
              ))
            ) : (
              <p className='text-white'>No movies to display</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
