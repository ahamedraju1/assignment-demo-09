import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signInUser} = use(AuthContext)

    const handleLogin =(e)=>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});

        signInUser(email, password)
        .then(result=>{
             console.log(result.user);
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (

        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h3 className="text-3xl text-center font-bold"> Please Login
                </h3>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">
                        Login
                    </button>
                    <p>New to this Website? Please
                        <Link to='/auth/register' className='text-blue-400 underline'>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    );
};

export default Login;