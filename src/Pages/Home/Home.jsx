import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import SubscriptionBox from '../../HomeLayout/SubscriptionBox';
import AccessPlus from '../../HomeLayout/AccessPlus';


const Home = () => {
    return (
        <div>  
          <header>
              <nav className='my-5'>
               <Navbar></Navbar> 
              
            </nav>      
          </header>

          <main className='w-11/12 mx-auto my-10'>
            <section className='main'>
              <Outlet></Outlet>
              <SubscriptionBox></SubscriptionBox>
              <AccessPlus></AccessPlus>
            </section>
          </main>
        </div>
    );
};

export default Home;