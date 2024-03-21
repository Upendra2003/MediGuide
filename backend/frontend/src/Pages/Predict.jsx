import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import symptomsData from './symptoms';
import '../components/modal.css';
import bg from '../assets/Background.png'
import bg2 from '../assets/Pattern.png'

export default function Predict() {
    const [symptomsList, setSymptomsList] = useState([]);
    const[modal,setModal] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10); // Number of items per page
    const [totalSymptoms, setTotalSymptoms] = useState(0);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [prediction, setPrediction] = useState({
        disease_name: '',
        precautions: [],
        disease_description: '',
    });

    useEffect(() => {
        fetchData(); // Fetch data when component mounts
        const savedPrediction = sessionStorage.getItem('predictionData');
        if (savedPrediction) {
            setPrediction(JSON.parse(savedPrediction));
        } else {
            setPrediction({ disease_name: '', precautions: [], disease_description: '' });
        }
        console.log('Updated prediction:', prediction);
    
        // Clear prediction data from sessionStorage when component is unmounted
        return () => {
            sessionStorage.removeItem('predictionData');
        };
    }, [currentPage]); // Re-fetch data when currentPage changes

    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/predict_disease/get_symptoms/`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            // setSymptomsList(data.symptoms);
            // setTotalSymptoms(data.total_symptoms);
            // console.log(symptomsList)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handleChange =(symptomsList)=>{
        setSymptomsList(symptomsList);
    };
    
    const handleCardClick = () => {
        const modal = document.querySelector('.modal-content');
        modal.classList.toggle('show-back');
      };
    const togglemodal =()=>{
        setModal(!modal);
    }
    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };

    // const handleNextPage = () => {
    //     if (currentPage < Math.ceil(totalSymptoms / pageSize)) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };

    // const handlePrevPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    // const handleSymptomSelect = (symptom) => {
    //     setSelectedSymptoms([...selectedSymptoms, symptom]);
    // };

   
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Selected symptoms:', symptomsList);
        try {
            const response = await fetch('http://127.0.0.1:8000/predict_disease/predict/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    symptoms: symptomsList.map(symptom => symptom.value)
                })
                
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // Handle response if needed
            const data = await response.json()

            sessionStorage.setItem('predictionData', JSON.stringify({
                disease_name: data.disease_name,
                precautions: data.precautions,
                disease_description:data.description,
            }));

            setPrediction({
                disease_name: data.disease_name,
                precautions: data.precautions,
                disease_description:data.description
            });
            console.log(prediction)
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    return (
        <div>
        <div>
        <div>
          {/* <img className='w-1/2  z-10' src={bg} alt="" /> */}
          <div className="container m-auto mt-7 z-0 relative">
            <img src={bg2} alt="" className=' absolute' />
            <img src={bg} alt="" className=' absolute' style={{zIndex:-1,width:600,right:0,top:-110}} />
            <div>
                <div className="flex flex-col items-center mt-6">
                    <h1 className=' font-bold text-2xl'>Symptom Predictor</h1><br/>
                    <div className='px-80 text-center text-slate-500'>Welcome to our Symptom Input Page - your first step towards personalized healthcare. Here, you have the opportunity to share your symptoms, allowing us to provide you with accurate and tailored medical advice.</div>
                </div>
            </div>
          </div>
        </div>

        
       <div className=' mx-72 pt-4 h-5/6  my-10  rounded-lg '>
         <div className='bg-white mt-2  h-full rounded-lg flex flex-col'>
        <h2 className='text-2xl text-center pt-5 font-bold'>Symptoms List:</h2>
            <form onSubmit={handleSubmit}>
                {/* <ul>
                    {symptomsList.map((symptom, index) => (
                        <li key={index} className='flex items-center mx-2'>
                            <label className=' text-blue-600'>
                                <input
                                    type="checkbox"
                                    value={symptom}
                                    onChange={() => handleSymptomSelect(symptom)}
                                    checked={selectedSymptoms.includes(symptom)}
                                />
                                {symptom}
                            </label>
                        </li>
                    ))}
                </ul> */}

                <Select
    defaultValue={[]}
    isMulti
    options={symptomsData}
    value={symptomsList}
    onChange={handleChange}
    className='block w-full p-2  text-md text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
  />
                <div className="m-3 float-right">
                    <button type='submit' onClick={togglemodal} class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Predict</span>
                    </button>
                </div>
            </form>
         </div>
       </div>
        </div>
           
            <hr />

            

            {prediction.disease_name && modal && (
    <div className='modal'>
        <div className="overlay">
            <div className="modal-content">
                    <div class="modal__face--front flex flex-col rounded-xl p-4 md:p-10">
                            <button className='close-modal' onClick={togglemodal}>close</button>
                        <h3 class="text-lg font-bold text-gray-800">{prediction.disease_name}</h3>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">{prediction.disease_description}</p>
                        <button class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none " onClick={handleCardClick}>
                        click to see precaution
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    
                    </div>
                    <div className=" modal__face--back flex flex-col rounded-xl px-4 pt-4 md:pt-10 md:pb-3 md:px-10">
                    <h4 className='text-lg font-bold text-gray-800'>Precautions:</h4>
                {prediction.precautions && Object.keys(prediction.precautions).length > 0 ? (
                    <div>
                        <ul>
                            {Object.values(prediction.precautions).map((precaution, index) => (
                                <li key={index} className='my-4'>{index+1}.{precaution}</li>
                            ))}
                        </ul>
                        <button class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none " onClick={handleCardClick}>
                        Go back
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    </div>
                ) : (
                    <p>No precautions available</p>
                )
                }

</div>
                
            </div>


        </div>
    </div>
)}



        </div>
    );
}