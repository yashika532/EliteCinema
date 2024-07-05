import React from 'react';
import useMovieId from '../../hooks/useMovieId';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  useMovieId(movieId);

  if (!trailerMovie) {
    return null; 
  }

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
