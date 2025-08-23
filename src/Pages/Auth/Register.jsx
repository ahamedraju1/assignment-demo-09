import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { createUser, setUser, googleSignIn, updateUser } = use(AuthContext);
     const navigate = useNavigate()
     
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        console.log(name, email, photoURL, password);

        // create user
        createUser(email, password)
            .then(result => {
                // console.log(user)
                const user = result.user;
                updateUser({displayName: name, photoURL: photoURL})
                .then(()=>{
                    setUser({...user, displayName: name, photoURL: photoURL});
                    navigate('/');
                })
                .catch((error)=>{
                    console.log(error);
                    setUser(user);
                })

                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                });
            })
            .then(() => {
                console.log(" user profile updated", {photoURL: photoURL, displayName: name});
            })
            .catch(error => {
                console.log(error)
                 
            })
  
    }


    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body space-y-3">
                <h3 className="text-3xl text-center font-bold">Please Register</h3>
                <form onSubmit={handleRegister} className="fieldset space-y-5">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" required />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />
                    <label className="label">PhotoURL</label>
                    <input type="text" name='photoURL' className="input" placeholder="URL" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password"
                        required />

                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <p>Already have an account? Please <Link to='/auth/login' className='text-blue-400 underline'>Login</Link></p>

                    <button onSubmit={handleGoogleSignIn} className='btn  w-full'><FcGoogle size={24}/>
                        Login with Google
                    </button>
                </form>
            </div>
        </div>


    );
};

export default Register;