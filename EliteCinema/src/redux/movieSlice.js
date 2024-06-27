import {createSlice} from "@reduxjs/toolkit";
import { Now_Playing_Movies } from "../utils/constant";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    Now_Playing_Movies:null,
    },
    reducers:{
      getNowPlayingMovie:(state,action) =>{
        state.Now_Playing_Movies = action.payload;
      }
    }
});
export const {getNowPlayingMovie} = movieSlice.actions;
export default movieSlice.reducer;