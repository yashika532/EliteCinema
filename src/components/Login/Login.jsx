import React from 'react'
import Header from '../Header/Header'
import loginimg from '../../assets/login.jpg'
const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src={loginimg} alt="Login-Banner" />
      </div>

      <form className=' flex flex-col w-3/12 p-12  my-36 left-0 mx-auto right-0 items-center justify-center absolute bg-black opacity-90'>
      <h1 className='text-white text-3xl mb-5 font-bold'>Signup</h1>
        <div className='flex flex-col'>
          
          <input type="text" placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

          <input type="text" placeholder='Email'  className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

      
          <input type="text" placeholder='Password'   className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
        </div>
      </form>
    </div>
  )
}

export default Login