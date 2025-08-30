import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import SubscriptionBox from '../../HomeLayout/SubscriptionBox';
import AccessPlus from '../../HomeLayout/AccessPlus';
// import { Helmet } from 'react-helmet';
import usePageTitle from '../../Hooks/usePageTitle';
import Footer from '../../Component/Footer/Footer';



const Home = () => {
   usePageTitle("Home")
    return (
        <div>  
          {/* <Helmet>
            <title>Home | My Gadget Store </title>
            
          </Helmet>
           */}
          
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
              <Footer></Footer>
            </section>
          </main>
        </div>
    );
};

export default Home;