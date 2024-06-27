import React, { useEffect } from 'react'
import Header from '../Header/Header'
import MainContainer from '../MainContainer/MainContainer'
import MovieContainer from '../MovieContainer/MovieContainer'
import axios from "axios"
import { Now_Playing_Movies, options } from '../../utils/constant'

const Browse = () => {
  const nowPlayingMovies = async()=>{
try {
  const response = await axios.get(Now_Playing_Movies,options);
  console.log(response.data.results)
} catch (error) {
  console.log("errors");
}
  }

  useEffect(()=>{
    nowPlayingMovies();
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