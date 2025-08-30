import React from 'react';
import { Outlet } from 'react-router';
import Profile from '../Pages/Profile/Profile';
import Navbar from '../Component/Navbar/Navbar';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Footer from '../Component/Footer/Footer';


const Auth = () => {
    return (
        <div className=''>
            <header className='w-11/12 mx-auto py-5'>

               <Navbar></Navbar>
               
            </header>
            <main className='w-11/12 mx-auto my-10'>
                
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Auth;