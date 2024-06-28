import React from 'react';
import './Header.css'
import logo from '../../assets/elitecinemared-logo.png';
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className='h-24 absolute z-10 flex w-[100%] items-center justify-between p-6 bg-gradient-to-b from-black'>
     
        <img className='logo-img' src={logo} alt="elite-cinema-logo" />
        <div className='flex items-center'>
          <IoIosArrowDropdown size="24px" color='white'/>
          <h1 className='text-lg font-medium text-white'>Yashika</h1>
          <div className='ml-4'>
          <button className='bg-red-800 text-white px-4 py-2'>Logout </button>
          <button className='bg-red-800 text-white px-4 py-2 ml-2' >Search Movie</button>
          </div>
         
        </div>
        
        </div>
 
  );
}

export default Header;
