import axios from "axios";
import { getNowPlayingMovie } from "../redux/movieSlice";
import { Now_Playing_Movies,options } from "../utils/constant";
import {useDispatch} from "react-redux";
const useNowPlayingMovies = async()=>{
  const dispatch = useDispatch();
  try {
    const response = await axios.get(Now_Playing_Movies,options);
    console.log(response.data.results)
    dispatch(getNowPlayingMovie(response.data.results))
  } catch (error) {
    console.log("errors");
  }
    }
    export default useNowPlayingMovies;