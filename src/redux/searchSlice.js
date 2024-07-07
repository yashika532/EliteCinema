import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName:null,
    searchedMovie:null,
  },
  reducers:{
    setMovieName: (state, action) => {
      state.movieName = action.payload;
      },
    setSearchedMovie: (state, action) => {
      state.searchedMovie = action.payload;
        },
  }

});
export const { setMovieName, setSearchedMovie } = searchSlice.actions;
export default searchSlice.reducer;