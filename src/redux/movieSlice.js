import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies:null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,
    toggle:false,
    trailerMovie:null,
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
      setToggle:(state)=>{
        state.toggle = !state.toggle;
      },
      getTrailerMovie:(state,action)=>{
        state.trailerMovie = action.payload;
      },
    }
});
export const {getNowPlayingMovie,getPopularMovie,getTopRatedMovie,getUpComingMovie,setToggle,getTrailerMovie} = movieSlice.actions;
export default movieSlice.reducer;