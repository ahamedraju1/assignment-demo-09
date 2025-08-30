import React from 'react';
import logo from '../assets/sub_1.jpg'
import { Icons } from '../Component/Icons';
import box_1 from '../assets/headphone_1.jpg'
// import box_2 from '../assets/headphone_2.jpg'
import box_2 from '../assets/sm_watch-3.jpg'
import box_3 from '../assets/headphone_3.jpg'
import box_4 from '../assets/sm_watch-1.jpg'
import box_5 from '../assets/sm_watch-2.jpg'

const AccessPlus = () => {
    return (
        <>
            <section className='my-48'>
                <div className='w-11/12 mx-auto items-center'>
                    {/* <h2 className='text-3xl font-semibold my-10'>Why Join Us?</h2> */}
                    <div className='md:flex lg:gap-5'>
                        <div className=''>
                            <img
                                className='w-full'
                                src={logo} alt="brand_img" />
                        </div>
                        <div className='ml-2 md:ml-5 lg:my-8'>
                            <h2 className='text-3xl font-semibold'>Gadgetsy Member of Benefits</h2>
                            <p className='text-xl font-light'>“Upgrade your world with the latest smartphones—power, style, and innovation at your fingertips. Shop now and experience premium gadgets delivered to your door.”</p>
                            <div className='my-5'>
                                <p className='flex items-center gap-4 text-xl'>
                                    <img className='w-8 h-8' src={Icons.gadgets} alt="" /> 100% Satisfaction Guarantee</p>
                                <p className='flex items-center gap-4 py-2 text-xl'>
                                    <img className='w-8 h-8' src={Icons.gadgets} alt="" /> Stay Up-To-Date Through Newsletter</p>
                                <p className='flex items-center gap-4 text-xl'>
                                    <img className='w-8 h-8' src={Icons.gadgets} alt="" />  Award-Winning Gadgets Community</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='my-48'>
                <h2 className='text-3xl font-semibold text-center'>Subscription Box Blog </h2>
                <p className='text-center my-2 text-lg'>Find The Gadgets News and offers</p>
                <div className=' w-11/12 mx-auto items-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  bg-base-100 card-lg ">
                        <div className="card-body">
                            <img className='w-full h-full' src={box_2} alt="headPhones" />
                            <h2 className="card-title">Omega Seamaster Aqua Terra</h2>
                            <p>A luxury timepiece featuring Swiss automatic movement, sapphire crystal, and 150m water resistance. Designed for elegance and durability.</p>
                               <button className='btn btn-primary'>subscribe</button>
                        </div>
                        <div className="card-body">
                            <img className='w-full h-full' src={box_4} alt="headPhones" />
                            <h2 className="card-title">Apple Watch Series 9</h2>
                            <p>The ultimate smartwatch with advanced health monitoring, always-on Retina display, and seamless integration with iPhone.</p>
                              <button className='btn btn-primary'>subscribe</button>
                        </div>
                        <div className="card-body">
                            <img className='w-full h-full' src={box_3} alt="headPhones" />
                            <h2 className="card-title">Focal Utopia</h2>
                            <p>The ultimate audiophile headphones with pure Beryllium drivers, delivering unrivaled clarity, dynamics, and detail for sound perfection. </p>
                              <button className='btn btn-primary'>subscribe</button>
                        </div>
                        <div className="card-body">
                            <img className='w-full h-full' src={box_1} alt="headPhones" />
                            <h2 className="card-title">Audeze LCD-5</h2>
                            <p>Flagship planar magnetic headphones with ultra-low distortion, incredible detail, and a lightweight design for professional audiophiles.</p>
                          
                         <button className='btn btn-primary'>subscribe</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default AccessPlus;