import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-16 lg:h-20' >
      <div className='flex shrink-0'>
        <NavLink
          to={'/'}
          className="flex text-black font-bold text-xl ml-14 p-2" >
        
          MedSP
        </NavLink>
      </div>
      <div class=" flex mr-4 items-center justify-center space-x-10">
        <NavLink
          to={'/Hiw'}
          className="text-black font-semibold text-xl mr-4 p-2" >
          How it Works?
        </NavLink>
        <NavLink
          to={'/Predict'}
            className="text-black font-semibold text-xl mr-4 p-2" >
          Predictor
        </NavLink>
        
        <NavLink
          to={'/STM'}
            className="text-black font-semibold text-xl mr-4 p-2" >
          scan the medicine
        </NavLink>

        <NavLink
          to={'/Profile'}
            className="text-black font-semibold text-xl mr-4 p-2" >
          Profile
        </NavLink>
        <Link to='/register' className='p-14 px-9 m-113 py-2.5 text-base transition-all duration-200 hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md '>Register</Link> 
        <Link to='/login' className='p-14 px-9 m-113 py-2.5 text-base transition-all duration-200 hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md '>Login</Link> 
      </div>
    </nav>
  )
}

export default Navbar
