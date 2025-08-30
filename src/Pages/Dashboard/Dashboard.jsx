import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import usePageTitle from '../../Hooks/usePageTitle';
import Footer from '../../Component/Footer/Footer';

const Dashboard = () => {
    usePageTitle("dashboard");
    return (
        <>
        <div className='flex flex-col min-h-screen pt-36'>
            <Helmet>
                <title>Dashboard | Gadgetsy </title>
            </Helmet>
            <Navbar></Navbar>
            <div className='bg-gray-100 min-h-[500px]'>
            <div className='space-y-2'>
             <h2 className='text-2xl font-extralight ml-12 mt-6 py-2'> Your Subscription Score will be displayed here </h2>
             <p className='ml-12 mt-5'>your current Score:  </p>
             <p className='ml-12'>your membership ID:  </p>
             <p className='ml-12'>your current status: Standard </p>
            </div>
            </div>
           
        </div>
         <div className='mt-24'>
            <Footer/>
         </div>
        </>
    );
};

export default Dashboard;