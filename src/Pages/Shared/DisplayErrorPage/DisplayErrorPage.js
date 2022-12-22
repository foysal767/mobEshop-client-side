import React from 'react';
import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayErrorPage = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(err => console.log(err));
        navigate('/')
    }
    return (
        <div className='w-10/12 mx-auto my-12'>
            <p className="text-error my-6 text-xl font-semibold">Something went wrong!!!</p>
            <p className="text-error my-6 text-xl font-semibold">{error.statusText || error.message}</p>
            <h4 className='text-3xl font-semibold'>Please <button className='btn btn-secondary text-white' onClick={handleLogOut}>Sign Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayErrorPage;