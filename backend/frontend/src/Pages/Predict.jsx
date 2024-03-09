import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Predict = () => {

  const [text,setText]=useState('')
  const [prediction,setPrediction]=useState({
    'disease_name':'',
    'precautions':[]
  })

  const predictDisease = async (e) => {
    e.preventDefault();
  
    let response = await fetch('http://127.0.0.1:8000/predict_disease/',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({ text })
    });
    if (response.status==200){
      console.log('Success')
    }else{
      alert('no')
    }
    const data = await response.json();
    // console.log(data);
    setPrediction({
      'disease_name':data.disease_name,
      'precautions':data.precautions
    })
    // console.log('fetch',fetch_precautions)
    // setPrecautions(fetch_precautions)
    console.log('prec',prediction)
  };
  

  const handleChange=(e)=>{
    setText(e.target.value);
  }

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
           <form onSubmit={predictDisease} className='flex flex-col'>
              {/* {% csrf_token %} */}
              <textarea onChange={handleChange} name="input_text" id="" cols="30" rows="10" placeholder='add more description'  className="h-36 border-2 placeholder-gray-600  rounded-md pl-3 mx-14"></textarea>
              <button className=' px-3 mx-24 my-5   py-2.5 text-base transition-all duration-200 hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md '> Predict</button>
           </form> 
        </div>
      </div>

      <div>
        <h3>Disease Name: {prediction.disease_name}</h3>
        {Array.isArray(prediction.precautions)
          ? prediction.precautions.map((precaution, index) => (
              <div key={index}>{`Precaution ${index + 1}: ${precaution}`}</div>
            ))
          : typeof prediction.precautions === 'object' && prediction.precautions !== null
          ? Object.entries(prediction.precautions).map(([key, value]) => (
              <div key={key}>{`${key}: ${value}`}</div>
            ))
          : null}
      </div>




      <div className="map">
        <h1>Nearby Hospitals</h1>
      </div>
      <Link to='/hospitals'>Show Hospitals</Link>
    </>
  )
}

export default Predict