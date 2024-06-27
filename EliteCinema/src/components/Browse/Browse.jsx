import React from 'react'
import Header from '../Header/Header'
import MainContainer from '../MainContainer/MainContainer'
import MovieContainer from '../MovieContainer/MovieContainer'

const Browse = () => {
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