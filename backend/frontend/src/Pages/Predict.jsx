import { models } from 'mongoose'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../assets/modal.css'

const Predict = () => {

  const [text,setText]=useState('')
  const[modal,setModal] = useState(false)

  const toggleModal=()=>{
    setModal(!modal);
  }
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
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 mx-64   h-5/6  my-14 py-24  rounded-lg '>
        <div className='bg-white mx-40  h-full rounded-lg flex flex-col '>
        <h1 className='text-2xl text-center pt-5 font-bold'>Let's get Started!</h1>
        <p className='text-center text-xs text-slate-500 pt-3 px-16'>Take the first step towards a healthier you. Input your symptoms now and experience the power of personalized healthcare advice.</p>
           <form onSubmit={predictDisease} className='flex flex-col'>
              {/* {% csrf_token %} */}
              <textarea onChange={handleChange} name="input_text" id="" cols="30" rows="10" placeholder='add more description'  className="h-36 border-2 placeholder-gray-600  rounded-md pl-3 mx-14"></textarea>
              <button className=' px-3 mx-24 my-5   py-2.5 text-base transition-all duration-200 hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-md ' onClick={toggleModal}> Predict</button>
           </form> 
           

              
{/* <form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Predict</button>
    </div>
</form> */}




        </div>
      </div>


    {modal && (
      <div className='block px-2 py-5 mx-28 text-md'>
      <div className=' overlay'></div>
      <div className="modal-content w-full max-w-sm p-4 bg-black  rounded-lg shadow sm:p-6 bg-gradient-to-r from-blue-500 to-cyan-500">

      <button className='close-modal font-bold p-2' onClick={toggleModal}>X</button>
      <h3 className='mb-3 text-lg  font-bold text-white md:text-xl  text-center'>You are suffering from {prediction.disease_name}</h3>
     
        {Array.isArray(prediction.precautions)
          ? prediction.precautions.map((precaution, index) => (
              <div key={index}><h3>{`Precaution ${index + 1}: ${precaution}`}</h3></div>
            ))
          : typeof prediction.precautions === 'object' && prediction.precautions !== null
          ? Object.entries(prediction.precautions).map(([key, value]) => (
              <div key={key} className='my-4 space-y-3'>
              <a href="#" class="flex items-center p-3 text-base font-semibold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<span class="flex-1 ms-3 whitespace-nowrap">{`${key}: ${value}`}</span>
</a></div>    
            ))
          : null}
          <Link to='/hospitals' className='font-medium  text-white  hover:underline mx-2'><div className='flex -m-4 mx-4'>
          click here to view nearby hospitals <div className='-mx-[0.4rem] my-[0.1rem]'>
          <svg  width="38px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
</svg>
          </div>
          </div></Link>
          </div>
      </div>
      
    )}

    </>
  )
}

export default Predict