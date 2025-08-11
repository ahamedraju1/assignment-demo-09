import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';

const Profile = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <h2> Profile page</h2>
        </div>
    );
};

export default Profile;