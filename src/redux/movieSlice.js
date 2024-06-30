import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies:null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null
    },
    reducers:{
      getNowPlayingMovie:(state,action) =>{
        state.nowPlayingMovies = action.payload;
      },
      getPopularMovie:(state,action) =>{
        state.popularMovies = action.payload;
        },
      getTopRatedMovie:(state,action) =>{
        state.topRatedMovies = action.payload;
      },
      getUpComingMovie:(state,action)=>{
        state.upcomingMovies = action.payload;
      },

    }
});
export const {getNowPlayingMovie,getPopularMovie,getTopRatedMovie,getUpComingMovie} = movieSlice.actions;
export default movieSlice.reducer;