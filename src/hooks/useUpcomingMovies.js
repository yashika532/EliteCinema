import axios from "axios";
import { getUpComingMovie } from "../redux/movieSlice";
import { Upcoming_Movies,options } from "../utils/constant";
import {useDispatch} from "react-redux";
const useUpcomingMovies = async()=>{
  const dispatch = useDispatch();
  try {
    const response = await axios.get(Upcoming_Movies,options);
    console.log(response.data.results)
    dispatch(getUpComingMovie(response.data.results))
  } catch (error) {
    console.log("errors");
  }
    }
    export default useUpcomingMovies;