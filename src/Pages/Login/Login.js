import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmaial] = useState('');

    //token

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.form?.pathname || '/'

    const handleLogin = data => {
        setLoginError('')
        console.log(data)
        signIn(data.email, data.password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setLoginUserEmaial(data.email);
        })
        .catch(e => {
            console.log(e.message)
            setLoginError(e.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-semibold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email' className="input input-bordered w-full max-w-xs"
                            {...register("email", { required: "Email Address is required" })}
                        />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                        })} />
                        {errors.password && <p className='text-error mt-2'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div className='text-center mt-2'>
                        {loginError && <p className='text-error'>Wrong Password</p>}
                    </div>
                </form>
                <p className='mt-4'>New to Doctors portal? <Link className='text-secondary' to='/signup'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;