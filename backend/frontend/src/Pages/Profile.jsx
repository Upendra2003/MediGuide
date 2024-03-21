import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

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
        <div className="container mx-auto my-5 p-5 h-[61vh]">
            <div className="md:flex no-wrap md:-mx-2">
                {/* Left Side */}
                <div className="w-full md:w-3/12 md:mx-2">
                    {/* Profile Card */}
                    <div className="bg-white p-3 border-t-4 border-green-400">
                        <div className="image overflow-hidden">
                            <img
                                className="h-auto w-full mx-auto"
                                // src={userData && userData.profile_pic}
                                alt=""
                            />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userData && userData.first_name} {userData && userData.last_name}</h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">{userData && userData.email}</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                            I am from {userData && userData.permanent_address} and 
                            I am currently in {userData && userData.current_address}
                            
                        </p>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                            contact no : {userData && userData.contact_no}
                        </p>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
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
                        </ul>
                        <button onClick={toggleUpdateProfile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Edit Profile</button>
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-full md:w-9/12 mx-2 h-64">
                    {/* Update Profile Section */}
                    {showUpdateProfile && (
                        <form onSubmit={updateProfile}>
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        {/* Add input fields for profile details */}
                                                                               {/* First Name */}
                                                                               <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name</div>
                                            <input type="text" className="m-2 rounded border-2 border-black" name="first_name" value={profile.first_name} onChange={handleChange} />
                                        </div>
                                        {/* Last Name */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <input type="text" className="m-2 rounded border-2 border-black" name="last_name" value={profile.last_name} onChange={handleChange} />
                                        </div>
                                        {/* Gender */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Gender</div>
                                            <input type="text" className="m-2 rounded border-2 border-black" name="gender" value={profile.gender} onChange={handleChange} />
                                        </div>
                                        {/* Contact No. */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                                            <input type="text" className="m-2 rounded border-2 border-black" name="contact_no" value={profile.contact_no} onChange={handleChange} />
                                        </div>
                                        {/* Email */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email</div>
                                            <input type="text" className="m-2 rounded border-2 border-black" name="email" value={profile.email} onChange={handleChange} />
                                        </div>
                                        {/* Current Address */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Current Address</div>
                                            <input type="text" className="m-2 rounded border-2 border-black" name="current_address" value={profile.current_address} onChange={handleChange} />
                                        </div>
                                        {/* Permanent Address */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Permanent Address</div>
                                            <input type="text" className="m-2 rounded border-2 border-black" name="permanent_address" value={profile.permanent_address} onChange={handleChange} />
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
                    )}
                    {/* End of Update Profile Section */}
                    <div className="my-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

