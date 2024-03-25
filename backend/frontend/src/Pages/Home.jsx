import React from 'react'
import Img from '../assets/hero-img1.png'
import { Link } from 'react-router-dom'
import bg from '../assets/Background.png'
import bg2 from '../assets/Pattern.png'

const Home = () => {
  return (
    <>
    <div>
          {/* <img className='w-1/2  z-10' src={bg} alt="" /> */}
          <div className="container m-auto mt-7 z-0 relative">
            <img src={bg2} alt="" className=' absolute' style={{zIndex:-1}} />
            <img src={bg} alt="" className=' absolute' style={{zIndex:-1,width:600,right:0,top:-110}} />
            <div className='flex justify-around items-center '>
            <section className=" sm:py-16 lg:py-24 ">
                <div className="max-w-5xl px-8 mx-auto sm:px-8 lg:px-8 sm:mt-0 lg:mt-0" style={{marginTop:'-10px'}}>
                    <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                        <div className="text-center sm:text-left ">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl my-10">“MedSP”- a all new digital way of next level first-aid for everyone</h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-400">Our platform leverages cutting-edge technology to provide you with accurate and timely medical guidance, right from the comfort of your own home</p>
                            <div className='mt-6 mb-6' >
                              <Link to={'/Predict'} className='rounded-md bg-slate-800 px-7 py-2.5  text-white '>Predictor</Link>
                              <Link to={'/Hiw'} className='ml-4 font-medium'> How it Work</Link>
                            </div>
                        </div>

                        <div className="relative pl-20 pr-6 sm:pl-8 md:px-0 mt-4">
                            <div className="relative w-full max-w-xs mt-6 mb-10 ml-auto">
                                <img className=" scale-150 " src={Img} style={{marginLeft: -30}}/>

                                <img className="absolute -top-4 -left-12" src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                  
                </div>
            </section>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Home