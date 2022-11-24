import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('')
    // const [createUserEmail, setCreateUserEmail] = useState('')

    const handleSignup = (data) => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                //toast
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // saveUser(data.name, data.email)
                    })
                    .catch(e => {
                        console.log(e)
                        signUpError(e.message)
                    })
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-semibold'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text'
                            {...register("name", {
                                required: "Name is Required"
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mt-6">
                        <select
                            className="input input-bordered w-full max-w-xs" name="userOption" id=""
                            {...register("userCategory", {
                                required: "User is Required"
                            })}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                        {errors.userCategory && <p className='text-error'>{errors.userCategory?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email'
                            {...register("email", { required: "Email address is required" })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be minimum 1 uppercase, lowercase and number" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value='Signup' type="submit" />
                    {
                        signUpError && <p className='text-error text-center mt-2'>{signUpError}</p>
                    }
                </form>
                <p className='text-center mt-2'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;