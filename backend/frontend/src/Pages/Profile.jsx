import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

const Profile = () => {

    let {user} = useContext(AuthContext)

    const [profile,setProfile] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        contact_no:"",
        current_address: "",
        permanent_address: "",
        profile_pic:""
    });

    const [userData,setUserData] = useState(null)

    const updateProfile = async (e)=>{
        e.preventDefault()
        JSON.stringify(user)
        // console.log(user)
        console.log(JSON.stringify(profile))
        let response = await fetch(`http://127.0.0.1:8000/profile/update-profile/${user.p_id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(profile)
        })

        console.log(response)
        if(response.status == 200){
            alert("Success")
        }else{
            alert("Failed")
        }
    }

    
    const getProfile = async (e) =>{
        let response = await fetch(`http://127.0.0.1:8000/profile/get-profile/${user.p_id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        });
        let data = await response.json()
        setUserData(data)
        console.log("data",data)
        console.log("userdara:",userData)
    }
 
    const handleChange = (e)=>{
        setProfile({
            ...profile,
            [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        getProfile()
    },[user.p_id])

  return (
    <div class="container mx-auto my-5 p-5 h-[61vh]">
        <div class="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""/>
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{userData.username}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">{userData.created.slice(0,10)}</span>
                        </li>
                    </ul>
                </div>
                
            </div>
            {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2 h-64">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <form onSubmit={updateProfile}>
                    <div class="bg-white p-3 shadow-sm rounded-sm">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">About</span>
                        </div>
                        <div class="text-gray-700">
                            <div class="grid md:grid-cols-2 text-sm">
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">First Name</div>
                                    <input type='text' class =" m-2 rounded border-2 border-black " name='first_name' onChange={handleChange}/>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Last Name</div>
                                    <input type='text' class =" m-2 rounded border-2 border-black " name='last_name' onChange={handleChange}/>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Gender</div>
                                    <input type='text' class =" m-2 rounded border-2 border-black " name='gender' onChange={handleChange}/>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                                    <input type='text' class =" m-2 rounded border-2 border-black " name='contact_no' onChange={handleChange}/>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Current Address</div>
                                    <input type='text' class =" m-2 rounded border-2 border-black " name='current_address' onChange={handleChange}/>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                    <input type='text' class =" m-2 rounded border-2 border-black " name='permanent_address' onChange={handleChange}/>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">profile pics</div>
                                    <input type='file' class =" m-2 rounded border-2 border-black " name='profile_pic' onChange={handleChange}/>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Email.</div>
                                    <div class="px-4 py-2">
                                    <input type='text' class =" m-2 rounded border-2 border-black " name='email' onChange={handleChange}/>
                                    </div>
                                </div>
                                <div class="flex mt-5 mx-48">
                                    <input onSubmit={updateProfile} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 px-5 py-1  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Submit" />
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </form>
                {/* <!-- End of about section --> */}

                <div class="my-4"></div>

                {/* <!-- Experience and education --> */}
                {/* <div class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Experience</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Education</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Masters Degree in Oxford</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <!-- End of Experience and education grid --> */}
                {/* </div> */}
                {/* <!-- End of profile tab --> */}
            </div>
        </div>
    </div>

  )
}

export default Profile