import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import bg from '../assets/Background.png'
import bg2 from '../assets/Pattern.png'

export default function LoginPage() {

    let {loginUser} = useContext(AuthContext)

    return (
      <>
      <div>
          {/* <img className='w-1/2  z-10' src={bg} alt="" /> */}
          <div className="container m-auto mt-7 z-0 relative">
            <img src={bg2} alt="" className=' absolute' style={{zIndex:-1}} />
            <img src={bg} alt="" className=' absolute' style={{zIndex:-1,width:600,right:0,top:-110}} />
            <div className='flex justify-around items-center'>
            <div className=" bg-white flex flex-col justify-center border rounded-lg mb-4">
      <div className="p-5 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">MedSP</h1>  
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={loginUser}  className="px-5 py-7">
            <label  className="font-semibold text-sm text-gray-600 pb-1 block" >Username</label>
            <input
                                type='text' 
                                    placeholder='name' name='username'
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
            <label className="font-semibold text-sm text-gray-600 pb-1 block" >Password</label>
            <input
                                    type="password" placeholder='password' name='password'
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
            <button  type="submit" className=" mt-8 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2 mx-2">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
          </form>
          
          <div className="py-5">
    
            <div className="grid grid-cols-2 gap-1">
            
              <div className="text-center sm:text-left whitespace-nowrap">
              
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <Link to={'/'} className="inline-block ml-1">Forgot Password</Link>
                </button>
              </div>
              
              <div className="text-center   whitespace-nowrap">
              
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="inline-block ml-1">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset" to={'/Register'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top pt-1 scale-125">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="inline-block ml-1">Don't have a Account </span>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
            </div>
          </div>
        </div>
        
    </>
    )
}
