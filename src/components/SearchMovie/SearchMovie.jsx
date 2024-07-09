import axios from "axios";
import React, { useState } from "react";
import { options, SEARCH_MOVIE_URL } from "../../utils/constant";
import { useDispatch, useSelector} from "react-redux";
import { setSearchMovieDetails } from "../../redux/searchSlice";
import MovieList from '../MovieList/MovieList'

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const {movieName, searchedMovie} = useSelector(store=>store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(response.data.results);
      const movies = response?.data?.results;
      dispatch(setSearchMovieDetails({searchMovie,movies}));
    
    } catch (error) {
      console.log("errors");
    }
    setSearchMovie("");
  };

  return (
    <>
<div className="flex justify-center pt-[10%] w-[100%]">
      <form onSubmit={submitHandler} className="w-[50%]">
        <div className="flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%]">
          <input
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            className="w-full outline-none rounded-md text-lg"
            type="text"
            placeholder="Search Movies"
          />
          <button className="bg-red-800 text-white rounded-md px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
     
    <MovieList title = {movieName} movies = {searchedMovie} searchMovie = {true}/>
    </>
    
  );
};

export default SearchMovie;
