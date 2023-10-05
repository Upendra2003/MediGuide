import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
  return (
    <div className='text-center h-[62vh] mx-32 my-5 rounded-xl bg-slate-900 text-white flex flex-col justify-center  items-center'>
        <h1 className='text-9xl font-extrabold'>404</h1>
        <h1 className='font-medium text-5xl '>Oops! Page not found</h1>
        <Link to={'/'} className='bg-emerald-400 my-5 px-5 py-2.5 rounded-xl font-semibold text-black '>Go to Homepage</Link>
    </div>
  )
}

export default error