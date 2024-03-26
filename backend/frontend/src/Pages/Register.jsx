import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../assets/Background.png'
import bg2 from '../assets/Pattern.png'

const Register = () => {

    const navigate=useNavigate();

       const [userDetails,setUserDetails] = useState({
        username:"",
        email:"",
        password:"",
        password2:"",
    })

    function getCSRFToken() {
        const cookieValue = document.cookie.match(/csrftoken=([^ ;]+)/);
        return cookieValue ? cookieValue[1] : null;
    }
    

    const registerUser= async (e)=>{
        e.preventDefault();
        let response = await fetch('http://127.0.0.1:8000/profile/register/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'X-CSRFToken': getCSRFToken(),
            },
            body:JSON.stringify(userDetails)
        })
        if (response.status==200){
            console.log({"msg":"success"});
            navigate('/login')
        }else{
            alert("Error Please try again !!")
        }
    }
    
    const handleChange=(e)=>{
        setUserDetails({
            ...userDetails,
            [e.target.name]:e.target.value
        })
        
    }
  return (
    <>
    <div>
          {/* <img className='w-1/2  z-10' src={bg} alt="" /> */}
          <div className="container m-auto mt-7 z-0 relative">
            <img src={bg2} alt="" className=' absolute' style={{zIndex:-1}} />
            <img src={bg} alt="" className=' absolute' style={{zIndex:-1,width:600,right:0,top:-110}} />
            <div className='flex justify-around items-center'>
            <section className="">
    <div className="grid  grid-cols-1 bg-gray-100 rounded-2xl mb-4">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-3 lg:px-8 sm:py-16 lg:py-24 border rounded-2xl">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to Celebration</h2>
                <p className="mt-2 text-base text-gray-600">Already have an account? <Link to={'/Login'} title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</Link></p>

                <form onSubmit={registerUser}className="mt-8 px-5 py-7">
                    <div className="space-y-5">
                        <div>
                            <label for="" className="text-base font-medium text-gray-900">Username</label>
                            <div className="mt-2.5">
                                <input
                                type='text'
                                    onChange={handleChange} placeholder='name' name='username'
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    onChange={handleChange} placeholder='email' name='email'
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" className="text-base font-medium text-gray-900"> Password </label>
                            <div className="mt-2.5">
                                <input
                                    type="password" onChange={handleChange} placeholder='password' name='password'
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" className="text-base font-medium text-gray-900"> Re-enter Password </label>
                            <div className="mt-2.5">
                                <input
                                   type="password" onChange={handleChange} placeholder='Re-enter password' name='password2'
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        
                        <div>
                            <button type="submit" onClick={registerUser} name="submit" value="Submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                Create free account
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="w-full border border-black"></span>
                            <span className="px-4">Or</span>
                            <span className="w-full border border-black"></span>
                        </div>
                    </div>
                </form>

                <div className="flex ">
                    <button type="button" className="relative inline-flex items-center justify-center w-full px-4 mr-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                        <div className="absolute inset-y-0 left-0 p-4">
                            <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                ></path>
                            </svg>
                        </div>
                        Google
                    </button>

                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center w-full px-4 mr-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                    >
                        <div className="absolute inset-y-0 left-0 p-4">
                            <svg className="w-6 h-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </div>
                         Facebook
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</section>
            </div>
          </div>
        </div>
    
</>
  )
}

export default Register