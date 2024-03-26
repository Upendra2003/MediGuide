import React, { useState } from 'react';
import img from '../assets/hehe.png';
import img2 from '../assets/left_img.png';
import bg from '../assets/Background.png';
import bg2 from '../assets/Pattern.png';
import { IoMdImages } from "react-icons/io";

const STM = () => {
  const [file, setFile] = useState(null);
  const [modal, setModal] = useState(false); // State to manage modal visibility
  const [data, setData] = useState([]); // State to hold modal data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [fileUpload,setFileUpload]=useState(false);

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setFileUpload(true);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData);

    try {
      setLoading(true); // Set loading to true while waiting for response
      let response = await fetch('http://127.0.0.1:8000/predict_disease/scan_image/', {
        method: 'POST',
        body: formData,
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data from server');
      }

      // Parse the response directly as an object
      const responseData = await response.json();

      // Log the response data
      console.log(responseData);

      // Set the data to state to show in modal
      setData(responseData);

      // Show the modal
      setModal(true);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false); // Set loading back to false after response is received
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div>
        <div className="container m-auto mt-7 z-0 relative">
          <img src={bg2} alt="" className=' absolute' />
          <img src={bg} alt="" className=' absolute' style={{ zIndex: -1, width: 600, right: 0, top: -110 }} />
          <div className='flex lg:flex-row flex-col justify-around items-center m-auto'>
            <div className="instructions">
              <img className='w-96 m-5 lg:m-0 ' src={img} alt="" />
            </div>
            <div className="img hidden lg:block">
              <img className=' w-80 ' src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleOnSubmit} method='POST' encType='multipart/form-data'>
          <label>
          {loading ? (
                  <div className='border-dashed border-2 cursor-pointer border-blue-500 m-10 rounded-lg flex flex-col justify-center items-center p-10'>
                    <h1 className='font-bold text-blue-500'>Photo Uploaded</h1>
                    <IoMdImages className='text-6xl text-blue-300' />
                    <p className='text-blue-500 text-sm'><span className='font-bold'>Scanning</span> the medicine...</p>
                    <p className=' font-light text-sm text-blue-500'>This may take few seconds!!</p>
                    <input type="file" accept="image/*" className='hidden' name='medicine_image' onChange={handleFileChange} />
                  </div>
                ) : (
                  <div className='border-dashed border-2 cursor-pointer border-blue-500 m-10 rounded-lg flex flex-col justify-center items-center p-10'>
                    <h1 className='font-bold text-blue-500'>Add Photo</h1>
                    <IoMdImages className='text-6xl text-blue-300' />
                    <p className='text-blue-500 text-sm'>Drag and drop or <span className='font-bold'>browse</span> to upload</p>
                    <p className=' font-light text-sm text-blue-500'>PNG, JPG, JPEG, GIF up to 10MB</p>
                    <input type="file" accept="image/*" className='hidden' name='medicine_image' onChange={handleFileChange} />
                  </div>
                )}
            
          </label>
          <div className=' flex justify-center items-center'>
            <button type='submit' className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group w-11/12 mb-5">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-800 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-800 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-800 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Scan</span>
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {modal && (
        <div className='modal'>
          <div className="overlay">
          <div className="modal-content h-2 lg:w-full" style={{ minWidth: '500px', maxWidth: '500px', top: '12%', width: '20vw', margin: 'auto',left: '36%' ,'@media (max-width: 768px)':{minWidth:'50px',maxWidth:'50px'} }}>
              
              <div className="modal__face--front flex flex-col rounded-xl lg:p-12 p-1">
                <button className='close-modal' onClick={toggleModal}>close</button>
                <h3 className="text-lg font-bold text-gray-800">Medicine Details</h3>
                {loading ? (
                  <div className="text-center mt-4">
                    <p>Loading...</p>
                  </div>
                ) : (
                  <div style={{ overflowY: 'auto', maxHeight: '400px',width:'800px' }}>
                    <table className="table-auto  ">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-md">Medicine Name</th>
                          <th className="px-4 py-2">Composition</th>
                          <th className="px-4 py-2">Uses</th>
                          <th className="px-4 py-2">How to Use</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((medicine, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">{medicine.medicine_name}</td>
                            <td className="border px-4 py-2">{medicine.medicine_composition}</td>
                            <td className="border px-4 py-2">{medicine.uses}</td>
                            <td className="border px-4 py-2">{medicine.how_to_use}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default STM;
