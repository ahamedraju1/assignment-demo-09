import React, { use, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../Provider/AuthProvider';

const Password = () => {
    const { resetPassword } = use(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePasswordReset = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log("reset password", email,  password);

        if(!/(?=.*[A-Z])/.test(password)){
            return setError("Password must contain at least one Uppercase letter.")
        }
        if(!/(?=.*[a-z])/.test(password)){
            return setError("Password must contain at least one Lowercase letter.")
        }
        if(password.length <6){
            return setError ("Password must be at least 6 characters long.")
        }


        resetPassword(email)
        .then(()=>{
            console.log("password reset email sent !",email)
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    return (
        <>
            <Navbar></Navbar>
            <div>
                 
                <div className="card bg-base-100 mx-auto mt-10 w-full max-w-md h-96 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-semibold"> Forget Password ! </h1>
                        <form className="fieldset">
                            <label className="label">Email</label>
                            <input
                             type="email" name='email' className="input" placeholder="Email"
                             onChange={(e)=> setEmail(e.target.value)}
                             required
                            />
                            <label className="label">New Password</label>
                            <input 
                            type="password" name='password' className="input" placeholder="Enter Password"
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                            />
                            
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p> }

                            <button onSubmit={handlePasswordReset} type='submit' className="btn btn-neutral mt-4"> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        
          
        </>
    );
};

export default Password;