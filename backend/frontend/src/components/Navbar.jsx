import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='flex items-center justify-between h-16 lg:h-20 relative' style={{ zIndex: 3 }}>
      <div className='flex-shrink-0'>
        <NavLink onClick={closeMenu} to={'/'} className="flex text-black font-bold text-xl ml-8 p-2">
          MedSP
        </NavLink>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-auto">
        <div className="flex-grow">
          <NavLink onClick={closeMenu} to={'/Hiw'} className="text-black font-semibold text-xl mr-4 p-2">How it Works?</NavLink>
          <NavLink onClick={closeMenu} to={'/Predict'} className="text-black font-semibold text-xl mr-4 p-2">Predictor</NavLink>
          <NavLink onClick={closeMenu} to={'/STM'} className="text-black font-semibold text-xl mr-4 p-2">Scan Medicine</NavLink>
          {user ? (
            <NavLink onClick={closeMenu} to={'/Profile'} className="text-black font-semibold text-xl mr-4 p-2">Profile</NavLink>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center">
          {user ? (
            <a onClick={logoutUser} className="p-2.5 text-base transition-all duration-200 cursor-pointer hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md mr-4">Logout</a>
          ) : (
            <>
              <a href='/register' className="p-2.5 text-base transition-all duration-200 cursor-pointer hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md mr-4">Register</a>
              <a href='/login' className="p-2.5 text-base transition-all duration-200 cursor-pointer hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md mr-4">Login</a>
            </>
          )}
        </div>
      </div>
      <div className="lg:hidden mr-4 shadow-lg rounded-lg">
        <button onClick={toggleMenu} className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
        {isOpen ? (
          <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.707 6.707a1 1 0 011.414 0L12 10.586l3.879-3.879a1 1 0 111.414 1.414L13.414 12l3.879 3.879a1 1 0 01-1.414 1.414L12 13.414l-3.879 3.879a1 1 0 01-1.414-1.414L10.586 12 6.707 8.121a1 1 0 010-1.414z"
            ></path>
          </svg>
        ) : (
          <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
            ></path>
          </svg>
        )}
        </button>
      </div>
      <div className={`lg:hidden absolute top-14 left-32 bg-white w-200 shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
        <div className="p-8">
          <NavLink onClick={closeMenu} to={'/Hiw'} className="block text-black font-semibold text-xl mb-4">How it Works?</NavLink>
          <NavLink onClick={closeMenu} to={'/Predict'} className="block text-black font-semibold text-xl mb-4">Predictor</NavLink>
          <NavLink onClick={closeMenu} to={'/STM'} className="block text-black font-semibold text-xl mb-4">Scan Medicine</NavLink>
          {user ? (
            <NavLink onClick={closeMenu} to={'/Profile'} className="block text-black font-semibold text-xl mb-4">Profile</NavLink>
          ) : (
            <></>
          )}
          {user ? (
            <a onClick={logoutUser} className="block text-black font-semibold text-xl cursor-pointer">Logout</a>
          ) : (
            <>
              <a href='/register' className="block text-black font-semibold text-xl mb-4">Register</a>
              <a href='/login' className="block text-black font-semibold text-xl mb-4">Login</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
