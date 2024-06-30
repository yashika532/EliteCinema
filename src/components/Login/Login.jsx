import React, { useState } from 'react'
import Header from '../Header/Header'
import loginimg from '../../assets/login.jpg'
import axios from 'axios';
import { API_END_POINT } from '../../utils/constant';
import toast from 'react-hot-toast';

const Login = () => {
  const [isLogin,setIsLogin]=useState(false);
  const [fullName,setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginHandler=()=>{
    setIsLogin(!isLogin);
  }

  const getInputData = async (e)=>{
    e.preventDefault();

    if(isLogin)
      {
          const user={email,password};
          try{
            const response = await axios.post(`${API_END_POINT}/login`,user);
            console.log(response.data);
            if(response.data.success)
              {
                toast.success(response.data.message);
              }
          }
          catch(error)
          {
            toast.error(error.response.data.message);
            console.log(error);
          }
      }
      else{
            const user={fullName,email,password};
        try{
          const response = await axios.post(`${API_END_POINT}/register`,user);
          console.log(response.data);
          if(response.data.success)
            {
              toast.success(response.data.message);
            }
        }
        catch(error)
        {
          console.log(error);
          toast.error(error.response.data.message);
        }

      }
    
    setFullName("");
    setPassword("");
    setEmail("");
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src={loginimg} alt="Login-Banner" />
      </div>

      <form onSubmit={getInputData} className='h-[65vh] flex flex-col w-96 p-12 my-36 left-0 mx-auto right-0 items-center justify-center absolute bg-black opacity-80 rounded-md form'>
        <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <div className='flex flex-col'>
          {!isLogin && (
            <input 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)}  
              type="text" 
              placeholder='Fullname' 
              className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' 
            />
          )}
          <input 
            value={email}  
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder='Email'  
            className='email outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' 
          />
          <input 
            value={password}  
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder='Password'   
            className='password outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' 
          />
          <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium submit'>
            {isLogin ? "Login" : "Signup"}
          </button>
          <p className='text-white mt-2'>
            {isLogin ? "New to Elite Cinema?" : "Already have an account"}
            <span 
              onClick={loginHandler}  
              className='ml-1 text-red-500 font-medium cursor-pointer'
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
