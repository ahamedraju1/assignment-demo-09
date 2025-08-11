import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser}= use(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })


    }

    return (

        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body space-y-3">
                <h3 className="text-3xl text-center font-bold">Please Register</h3>
                <form onSubmit={handleRegister} className="fieldset space-y-5">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">PhotoURL</label>
                    <input type="text" name='photoURL' className="input" placeholder="URL" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <p>Already have an account? Please <Link to='/auth/login' className='text-blue-400 underline'>Login</Link></p>
                </form>
            </div>
        </div>


    );
};

export default Register;