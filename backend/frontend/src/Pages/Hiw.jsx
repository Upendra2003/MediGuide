import React from 'react'
import Img from '../assets/hero-img2.png'
import Img2 from '../assets/hero-img3.png'
import bg from '../assets/Background.png'
import bg2 from '../assets/Pattern.png'
import Img3 from '../assets/hiw.png'

const Hiw = () => {
  return (
    <>
      <div>
          {/* <img className='w-1/2  z-10' src={bg} alt="" /> */}
          <div className="container m-auto mt-7 z-0 relative">
            <img src={bg2} alt="" className=' absolute' style={{zIndex:-1}}/>
            <img src={bg} alt="" className=' absolute' style={{zIndex:-1,width:600,right:0,top:-110}} />
            <section className="py-10 sm:py-16 lg:py-24">
              <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8" style={{marginTop:-50}}>
                  <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                      <div className="">
                          <p className="text-2xl text-center font-bold leading-tight text-black lg:text-start lg:text-5xl my-10">Empowering Your Health Journey with Precision and Care</p>
                          <p className="mt-4 text-base leading-relaxed text-gray-600 text-center lg:text-start">Guiding Your Health Choices with Data-Driven Precision and Compassion</p>
                          <div className='mt-4 mb-20 lg:mb-0 flex items-center justify-center lg:block' >
                            <button className='rounded-md bg-slate-800 px-7 py-2.5  text-white '>Get Started</button>
                            <button className='ml-4 font-medium'><a href="https://github.com/Upendra2003/Meddp.git"> Github repo</a></button>
                          </div>
                      </div>

                      <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                              <img className="lg:ml-auto scale-150 lg:w-64 w-52" src={Img3}  />
                      </div>
                  </div>
                  
              </div>
              <div className=' flex flex-col justify-center items-center mt-32 align-middle '>
                <h2 className=' font-semibold lg:text-4xl text-3xl '>welcome to MediGuide</h2>
                <p className=' text-center lg:w-11/12 lg:mx-96  lg:mt-4 text-slate-500 p-5 '>
                At MedSP, we believe that everyone deserves access to reliable and personalized healthcare solutions. Our platform leverages cutting-edge technology to provide you with accurate and timely medical guidance, right from the comfort of your own home.
                </p>
              </div>
              <div className='flex flex-col lg:flex-row'>
                <div className='lg:px-32 lg:py-12 p-5 border border-blue-300 rounded-md lg:border-none m-5 drop-shadow-2xl'>
          <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="settings"><path d="M30.391,12.68l-3.064-0.614c-0.154-0.443-0.336-0.873-0.537-1.289l1.736-2.604   c0.529-0.793,0.424-1.85-0.25-2.523l-1.924-1.924c-0.387-0.387-0.898-0.586-1.416-0.586c-0.383,0-0.77,0.11-1.107,0.336   l-2.604,1.735c-0.418-0.202-0.848-0.382-1.291-0.536L19.32,1.61c-0.186-0.936-1.008-1.608-1.961-1.608h-2.72   c-0.953,0-1.774,0.673-1.961,1.608l-0.614,3.065c-0.443,0.154-0.873,0.335-1.289,0.536L8.172,3.476   C7.833,3.25,7.447,3.14,7.063,3.14c-0.517,0-1.028,0.199-1.415,0.586L3.725,5.65c-0.674,0.674-0.779,1.73-0.25,2.523l1.735,2.604   c-0.202,0.417-0.382,0.847-0.536,1.29L1.608,12.68C0.673,12.867,0,13.688,0,14.641v2.72c0,0.953,0.673,1.775,1.608,1.961   l3.065,0.615c0.154,0.443,0.335,0.873,0.536,1.289L3.475,23.83c-0.529,0.793-0.424,1.85,0.25,2.523l1.924,1.924   c0.387,0.387,0.898,0.586,1.415,0.586c0.384,0,0.771-0.111,1.108-0.336l2.604-1.736c0.417,0.203,0.847,0.383,1.29,0.537   l0.613,3.064c0.187,0.936,1.008,1.609,1.961,1.609h2.72c0.953,0,1.775-0.674,1.961-1.609l0.615-3.064   c0.443-0.154,0.873-0.336,1.289-0.537l2.604,1.736c0.338,0.225,0.725,0.336,1.107,0.336c0.518,0,1.029-0.199,1.416-0.586   l1.924-1.924c0.674-0.674,0.779-1.73,0.25-2.523l-1.736-2.604c0.203-0.418,0.383-0.848,0.537-1.291l3.064-0.613   C31.326,19.137,32,18.314,32,17.361v-2.72C32,13.688,31.326,12.867,30.391,12.68z M26.934,17.975   c-0.695,0.139-1.264,0.635-1.496,1.305c-0.129,0.369-0.279,0.727-0.447,1.074c-0.311,0.639-0.258,1.393,0.135,1.982l1.736,2.604   l-1.924,1.924l-2.604-1.736c-0.334-0.223-0.721-0.336-1.109-0.336c-0.297,0-0.596,0.066-0.871,0.199   c-0.348,0.168-0.705,0.32-1.076,0.449c-0.668,0.232-1.164,0.801-1.303,1.496l-0.615,3.066h-2.72l-0.613-3.066   c-0.139-0.695-0.635-1.264-1.304-1.496c-0.369-0.129-0.728-0.279-1.075-0.447c-0.276-0.135-0.574-0.201-0.872-0.201   c-0.389,0-0.775,0.113-1.109,0.336l-2.604,1.736l-1.924-1.924l1.735-2.604c0.393-0.59,0.444-1.344,0.137-1.98   c-0.168-0.348-0.319-0.705-0.448-1.076c-0.232-0.668-0.802-1.164-1.496-1.303l-3.065-0.615L2,14.641l3.066-0.613   c0.694-0.139,1.264-0.635,1.496-1.304c0.129-0.369,0.278-0.728,0.447-1.075c0.31-0.638,0.258-1.392-0.136-1.981L5.139,7.064   L7.062,5.14l2.604,1.735C10,7.098,10.387,7.211,10.775,7.211c0.297,0,0.595-0.066,0.871-0.199c0.347-0.168,0.705-0.319,1.075-0.448   c0.669-0.232,1.165-0.802,1.304-1.496l0.614-3.065l2.72-0.001l0.613,3.066c0.139,0.694,0.635,1.264,1.305,1.496   c0.369,0.129,0.727,0.278,1.074,0.447c0.277,0.134,0.574,0.2,0.873,0.2c0.389,0,0.775-0.113,1.109-0.336l2.604-1.735l1.924,1.924   l-1.736,2.604c-0.393,0.59-0.443,1.343-0.137,1.98c0.168,0.347,0.32,0.705,0.449,1.075c0.232,0.669,0.801,1.165,1.496,1.304   l3.064,0.614L30,17.361L26.934,17.975z" fill="#333333"/><path d="M16,9.001c-3.865,0-7,3.135-7,7c0,3.866,3.135,7,7,7s7-3.135,7-7C23,12.136,19.865,9.001,16,9.001z    M16,22.127c-3.382,0-6.125-2.744-6.125-6.125c0-3.382,2.743-6.125,6.125-6.125c3.381,0,6.125,2.743,6.125,6.125   C22.125,19.383,19.381,22.127,16,22.127z" fill="#333333"/><path d="M16,12.001c-2.21,0-4,1.79-4,4c0,2.209,1.79,4,4,4c2.209,0,4-1.791,4-4C20,13.792,18.209,12.001,16,12.001z    M16,19.002c-1.656,0-3-1.344-3-3c0-1.656,1.344-3,3-3s3,1.344,3,3C19,17.658,17.656,19.002,16,19.002z" fill="#333333"/></g></svg>
                    <h2 className=' text-lg font-semibold py-1'>Your Health, Your Way</h2>
                    <p className='text-left text-slate-500'>Register for personalized recommendations and contribute to platform improvement.</p>
                  </div>
                  <div className='lg:px-32 lg:py-12 p-5 border border-blue-300 rounded-md lg:border-none m-5 drop-shadow-2xl'>
          <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M31.11,28.336c-0.201-0.133-3.848-2.525-9.273-3.699c1.99-2.521,3.268-5.912,3.811-8.169  c0.754-3.128,0.461-9.248-2.543-13.062C21.349,1.177,18.892,0,16,0c-2.892,0-5.349,1.178-7.104,3.406  C5.892,7.219,5.6,13.339,6.353,16.467c0.543,2.257,1.82,5.648,3.811,8.169c-5.425,1.174-9.072,3.566-9.272,3.699  c-0.733,0.488-1.061,1.4-0.805,2.242C0.341,31.422,1.12,32,2,32h28c0.881,0,1.658-0.578,1.914-1.422  C32.171,29.736,31.843,28.824,31.11,28.336z M20.267,23.398l-0.326,0.414c-2.385,2.74-5.495,2.74-7.879,0l-0.327-0.414  c-2.785-3.529-4.167-8.197-3.572-12.65C8.708,6.469,11.16,2,16,2c4.84,0,7.293,4.47,7.838,8.749  C24.431,15.204,23.054,19.867,20.267,23.398z M2,30c0.138-0.092,3.526-2.314,8.586-3.408l2.484-0.537C13.957,26.637,14.93,27,16,27  c1.071,0,2.043-0.363,2.93-0.945l2.484,0.537c5.02,1.086,8.396,3.283,8.586,3.408H2z" fill="#333333" id="usericon"/></svg>

                    <h2 className=' text-lg font-semibold py-1'>Have Questions? We're Here to Help.</h2>
                    <p className='text-left text-slate-500'>Visit our FAQ section or reach out to our dedicated support team for any assistance you may need.</p>
                  </div>
              </div>
                    <div className="flex items-center flex-col lg:flex-row lg:mt-12">
                        <div className="">
                                <img className="lg:m-12 lg:scale-105 " src={Img} />
                        </div>
                        <div className="">
                            <h2 className="lg:text-4xl text-xl font-bold leading-tight text-black lg:ml-96 m-5">Your well-being is our top priority. Start your journey towards a healthier you with MediGuide today.</h2>
                        </div>
                    </div>
                  
                  <div className="lg:max-w-5xl lg:px-4 lg:mx-auto">
                    <div className="hidden lg:grid items-center grid-cols-2 gap-x-20">
                        <div className="">
                            <h2 className="text-4xl font-bold leading-tight text-black">"Your health matters most. Begin your path to wellness with MediGuide now”.</h2>
                        </div>

                        <div className=" pl-20 ">
                                <img className="ml-auto scale-150 " src={Img2} />
                        </div>
                  </div>
                  
              </div>


          </section>
          </div>
        </div>
    
</>
  )
}

export default Hiw