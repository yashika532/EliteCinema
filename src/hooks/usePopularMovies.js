import axios from 'axios'

import { getPopularMovie } from '../redux/movieSlice';
import { Popular_Movies, options } from '../utils/constant';
import { useDispatch } from 'react-redux';
const usePopularMovies = async () => {
  const dispatch = useDispatch();
try {
   const response = await axios.get(Popular_Movies,options);
   console.log(response.data.results)
   dispatch(getPopularMovie(response.data.results))
} catch (error) {
  console.log("errors");
}
}

export default usePopularMovies