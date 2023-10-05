import React from 'react'

const Predict = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16">
        <h1 className=' font-bold text-2xl'>Symptom Predictor</h1><br/>
        <div className='px-80 text-center text-slate-500'>Welcome to our Symptom Input Page - your first step towards personalized healthcare. Here, you have the opportunity to share your symptoms, allowing us to provide you with accurate and tailored medical advice.</div>
      </div>
      <div className='bg-blue-400 mx-72 pt-14 h-5/6  my-14  rounded-lg '>
        <div className='bg-white mx-40  h-full rounded-lg flex flex-col '>
        <h1 className='text-2xl text-center pt-5 font-bold'>Let's get Started!</h1>
        <p className='text-center text-xs text-slate-500 pt-3 px-16'>Take the first step towards a healthier you. Input your symptoms now and experience the power of personalized healthcare advice.</p>
           <form action="/predict" method="POST" className='flex flex-col'>
           <input type="text" name="symptoms" placeholder="Enter symptoms here" className='border-2 py-1.5 placeholder-gray-600 border-gray-300 rounded-md pl-3 mx-14 '></input>
           <textarea name="" id="" cols="30" rows="10" placeholder='add more description'  className="h-36 border-2 placeholder-gray-600  rounded-md pl-3 mx-14"></textarea>
           </form> 
           <button className=' px-3 mx-24 my-5   py-2.5 text-base transition-all duration-200 hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md '> Predict</button> 
      
        </div>
      </div>
      
    </>
  )
}

export default Predict