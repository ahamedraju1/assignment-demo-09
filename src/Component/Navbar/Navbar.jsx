import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo_1.jpg'
import { AuthContext } from '../../Provider/AuthProvider';
import userIcon from '../../assets/user.png'

const Navbar = () => {
    const { user, userSignOut } = use(AuthContext);
    const [menu, setMenu] = useState(false);
    useEffect(()=>{
        if(menu){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto"
        }
    },[menu]);

    const handleLogOut = () => {
        console.log("user trying to Logout");
        userSignOut()
            .then(() => {
                alert("Log out successfully");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50'>

                <div className="w-11/12 mx-auto flex justify-between items-center sm:py-5 py-2 lg:px-8 bg-white relative z-10">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Gadgetsy</h3>
                    </div>
                    <div className=''>
                        {user && user.email}
                    </div>

                    <nav className="hidden md:flex gap-5 text-lg font-medium">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Home</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to='/subPackage'>Subscription </NavLink>
                    </nav>

                    <div className='md:hidden mt-2 flex items-center'>
                        <button className="text-3xl" onClick={() => setMenu(!menu)}>☰
                        </button>

                        {
                            menu && (
                                <div className="md:hidden absolute top-full left-0 w-full flex flex-col gap-3 px-6 py-4 bg-gray-50 border-t">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Home</NavLink>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                    <NavLink to="/profile">Profile</NavLink>
                                    <NavLink to='/subPackage'>Subscription </NavLink>
                                </div>
                            )
                        }
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img className='w-10 h-10 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="user" />
                        {
                            user ? <button
                                onClick={handleLogOut}
                                className='btn btn-secondary px-10'>
                                Log Out</button> :
                                <Link to="/auth/login" className="btn btn-primary px-10">
                                    Login
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;