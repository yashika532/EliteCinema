import React, { useEffect } from 'react'
import Header from '../Header/Header'
import MainContainer from '../MainContainer/MainContainer'
import MovieContainer from '../MovieContainer/MovieContainer'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import usePopularMovies from '../../hooks/usePopularMovies'
import useTopRatedMovies from '../../hooks/useTopRatedMovies'
import useUpcomingMovies from '../../hooks/useUpcomingMovies'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useEffect(()=>{
   
  },[]);

  return (
    <div>
      <Header/>
      <div>
        <MainContainer/>
        <MovieContainer/>
      </div>
    </div>
  )
}

export default Browse