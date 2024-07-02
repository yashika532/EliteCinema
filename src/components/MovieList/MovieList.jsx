import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-8'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='overflow-x-auto no-scrollbar cursor-pointer flex'>
        <div className='flex items-center'>
          {
            movies && movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
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
