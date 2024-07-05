import React from 'react';
import './Header.css'
import logo from '../../assets/elitecinemared-logo.png';
import { IoIosArrowDropdown } from "react-icons/io";
import axios from 'axios';
import { API_END_POINT } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToggle } from '../../redux/movieSlice';
//import {setUser} from '../redux/iserSlice';

const Header = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutHandler=async()=>{
    try{
      const res= await axios.get(`${API_END_POINT}/logout`);
      dispatch(setUser(null));
      navigate('/');
      console.log(res);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const toggleHandler = () =>{
    dispatch(setToggle());
  }
  
  const toggle = useSelector(store=>store.movie.toggle)
  return (
    <div className='h-24 absolute z-10 flex w-[100%] items-center justify-between p-6 bg-gradient-to-b from-black'>
     
        <img className='logo-img' src={logo} alt="elite-cinema-logo" />
        <div className='flex items-center'>
          <IoIosArrowDropdown size="24px" color='white'/>
          <h1 className='text-lg font-medium text-white'>Yashika</h1>
          <div className='ml-4'>
          <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout </button>
          <button  onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2' >{toggle?"Home":"Search Movie"}</button>
          </div>
         
        </div>
        
        </div>
 
  );
}

export default Header;
