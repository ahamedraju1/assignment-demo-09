import React, { use, useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import usePageTitle from '../../Hooks/usePageTitle';

const Profile = () => {
    usePageTitle("Profile");
const { user } = use(AuthContext);
const [name, setName] = useState("");
const [photoURL, setPhotoURL] = useState('');
const [message, setMessage] = useState("");

 const handleUpdateProfile =(e)=>{
    e.preventDefault();
    
    updateProfile(user, {
        displayName: name,
        photoURL: photoURL
    })
    .then(()=>{
        setMessage("Profile updated successfully! ")
    })
    .catch(error=>{
        console.log(error);
        setMessage("Failed to update profile.");
    });
 }

    return (
        <>
            <Navbar />

            <div className="w-11/12 mx-auto my-10">
                <h2 className="text-3xl text-center my-14
                 font-semibold ">Profile Page</h2>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* User Info */}
                    <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                        <img
                            src={user?.photoURL || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-bold">{user?.displayName || 'No Name'}</h3>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>

                    {/* Update Form */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <div>
                                <label className="block font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange= {(e)=> setName(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Photo URL</label>
                                <input
                                    type="text"
                                    value= {photoURL}
                                    onChange = {(e)=> setPhotoURL(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full mt-4"
                            >
                                Save Changes
                            </button>
                        </form>
                        {message && <p className='text-green-500 mt-4'>{message}</p> }
                    </div>
                </div>
            </div>

        </>

    );
};

export default Profile;