import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo_1.jpg'
import { AuthContext } from '../../Provider/AuthProvider';
import userIcon from '../../assets/user.png'

const Navbar = () => {
    const { user, userSignOut } = use(AuthContext);

    const handleLogOut = ()=>{
        console.log("user trying to Logout");
        userSignOut()
        .then(()=>{
            alert("Log out successfully");
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <>
            {/* <div className="banner absolute">
                <img className='w-full' src={banner} alt="" />
            </div>
            <div className=''>{user && user.email}</div>
            <div className='flex justify-between py-5 items-center relative'>
                <div className='flex items-center'>
                    <img className='w-12 h-10 rounded-full' src={logo} alt="" />

                    <h3 className="text-3xl">Gadgetsy</h3>
                </div>
                <div className="nav flex gap-5">
                    <NavLink to=''>Home</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                {user ?
                    <button className='btn'>Logout</button> :
                    <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>}
            </div> */}

            {/* chat gpt version */}
            {/* <div className="w-11/12 mx-auto absolute top-0 left-0 flex justify-between items-center py-5 px-8 text-white z-10">
                <img src={banner} alt="" />
            </div> */}

            <div>
                {user && user.email}
            </div>
            <div className="w-11/12 mx-auto flex justify-between items-center py-5 px-8 bg-white relative z-10">
                <div className="flex items-center gap-3">
                    <img className="w-12 h-10 rounded-full" src={logo} alt="Logo" />
                    <h3 className="text-3xl font-bold">Gadgetsy</h3>
                </div>
                <div className="nav flex gap-5 text-lg">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className='login-btn flex gap-5 items-center'>
                    <img src={userIcon} alt="user" />
                    {
                        user ? <button
                        onSubmit={handleLogOut}
                         className='btn btn-secondary px-10'>
                         Log Out</button> :
                        <Link to="/auth/login" className="btn btn-primary px-10">
                                Login
                         </Link>
                    }

                </div>
            </div>

        </>
    );
};

export default Navbar;