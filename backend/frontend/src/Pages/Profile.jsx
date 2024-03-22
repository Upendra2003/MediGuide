import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import profile_bg from '../assets/profile_bg.png'
import default_profile from '../assets/default_profile.png'
import bg from '../assets/Background.png'
import bg2 from '../assets/Pattern.png'

const Profile = () => {
    const { user } = useContext(AuthContext);

    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        contact_no: '',
        current_address: '',
        permanent_address: '',
        profile_pic: '',
    });

    const [userData, setUserData] = useState(null);
    const [showUpdateProfile, setShowUpdateProfile] = useState(false);

    const updateProfile = async (e) => {
        e.preventDefault();
        console.log('Updating profile:', profile);

        try {
            const response = await fetch(`http://127.0.0.1:8000/profile/update-profile/${user.p_id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });

            if (response.ok) {
                const updatedProfile = await response.json();
                setUserData(updatedProfile);
                alert('Profile updated successfully');
            } else {
                throw new Error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile: ' + error.message);
        }
    };

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const toggleUpdateProfile = () => {
        setShowUpdateProfile(!showUpdateProfile);
    };

    const getProfile = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/profile/get-profile/${user.p_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setUserData(data);
            console.log('Profile data:', data);
            setProfile(data); // Update profile state with fetched data
        } catch (error) {
            console.error('Error fetching profile data:', error);
            // Handle the error, e.g., display a message to the user
        }
    };

    useEffect(() => {
        getProfile();
    }, [user.p_id]);

    return (
        <>
        <div>
          {/* <img className='w-1/2  z-10' src={bg} alt="" /> */}
          <div className="container m-auto mt-7 z-0 relative">
            <img src={bg2} alt="" className=' absolute' style={{zIndex:-1}}/>
            <img src={bg} alt="" className=' absolute' style={{zIndex:-1,width:600,right:0,top:-110}} />
            <div className="container mx-auto mb-12 p-5 h-full">
            <div className="md:flex no-wrap md:-mx-2">
                {/* Left Side */}
                <div className="w-full h-full md:w-4/12 md:mx-16">
                    {/* Profile Card */}
                    <div className="bg-cover text-center rounded-lg shadow-lg h-160 w-94" style={{ backgroundImage: `url('${profile_bg}')` }}>
                        <div className="image overflow-hidden">
                            <img
                                className="h-24 w-24 mx-auto rounded-full my-8"
                                // src={userData && userData.profile_pic}
                                src={default_profile}
                            />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 mb-4">{userData && userData.first_name} {userData && userData.last_name}</h1>
                        <h3 className="text-gray-900 font-lg text-semibold leading-6 mb-4">{userData && userData.email}</h3>
                        <p className="text-sm text-gray-800 leading-6 mb-4">
                            I am from {userData && userData.permanent_address} and 
                            I am currently in {userData && userData.current_address}
                            
                        </p>
                        <p className="text-sm text-gray-600 leading-6">
                            contact no : {userData && userData.contact_no}
                        </p>
                        {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto">
                                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                                </span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">{userData && userData.created && userData.created.slice(0, 10)}</span>
                            </li>
                        </ul> */}
                        
                        <button onClick={toggleUpdateProfile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4">Edit Profile</button>
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-full md:w-10/12 mx-1 h-64 rounded-lg shadow-lg" >
                    {/* Update Profile Section */}
                    
                        <form onSubmit={updateProfile}>
                            <div className="bg-white p-3 shadow-lg rounded-lg">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-5">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-900">
                                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                                        {/* Add input fields for profile details */}
                                        {/* First Name */}
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=''  onChange={handleChange}/>
                                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>

                                        {/* Last Name */}
                                        <div class="relative z-0 w-full mb-5 group text-grey-900">
                                            <input type="text" name="last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={handleChange}/>
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                        {/* Gender */}
                                        <div class="relative z-0 w-full mb-5 group text-grey-900">
                                            <input type="text" name="gender" id="gender" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={handleChange}/>
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                                        </div>
                                        {/* Contact No. */}
                                        <div class="relative z-0 w-full mb-5 group text-grey-900">
                                            <input type="text" name="contact_no" id="contact_no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={handleChange}/>
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact no.</label>
                                        </div>
                                        {/* Email */}
                                        <div class="relative z-0 w-full mb-5 group text-grey-900">
                                            <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={handleChange}/>
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                        </div>
                                        {/* Current Address */}
                                        <div class="relative z-0 w-full mb-5 group text-grey-900">
                                            <input type="text" name="current_address" id="current_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={handleChange}/>
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Address</label>
                                        </div>
                                        {/* Permanent Address */}
                                        <div class="relative z-0 w-full mb-5 group text-grey-900">
                                            <input type="text" name="permanent_address" id="permanent_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={handleChange}/>
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Permanent Address</label>
                                        </div>
                                        {/* Profile Picture */}
                                        {/* <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Profile Picture</div>
                                            <input type="file" className="m-2 rounded border-2 border-black" name="profile_pic" onChange={handleChange} />
                                        </div> */}
                                        
                                        {/* Submit Button */}
                                        <div className="flex mt-5 mx-48">
                                            <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-1  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Save" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                    
                    {/* End of Update Profile Section */}
                    <div className="my-4"></div>
                </div>
            </div>
        </div>
          </div>
        </div>
        
        </>
    );
};

export default Profile;

