import axios from 'axios'

import { getTopRatedMovie } from '../redux/movieSlice';
import { Top_Rated_Movies, options } from '../utils/constant';
import { useDispatch } from 'react-redux';
const useTopRatedMovies = async () => {
  const dispatch = useDispatch();
try {
   const response = await axios.get(Top_Rated_Movies,options);
  //  console.log(response.data.results)
   dispatch(getTopRatedMovie(response.data.results))
} catch (error) {
  console.log("errors");
}
}

export default useTopRatedMovies