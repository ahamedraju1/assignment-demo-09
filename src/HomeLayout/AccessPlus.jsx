import React from 'react';
import logo from '../assets/logo_1.jpg'
import { Icons } from '../Component/Icons';

const AccessPlus = () => {
    return (
        <>
            <section className='my-48'>
                <div className='w-11/12 mx-auto items-center'>
                    {/* <h2 className='text-3xl font-semibold my-10'>Why Join Us?</h2> */}
                    <div className='flex'>
                        <div className=''>
                            <img
                                className='min-h-7 w-8/12'
                                src={logo} alt="brand_img" />
                        </div>
                        <div className='my-8'>
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
                    <h2 className='text-3xl font-semibold text-center'>Our products</h2>
                <div className='w-11/12 mx-auto items-center'>
                    
                </div>

            </section>
        </>
    );
};

export default AccessPlus;