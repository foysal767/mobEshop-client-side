import React from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayErrorPage = () => {
    const {logOut} = useContext(AuthContext);
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <p className="text-error">Something went wrong!!!</p>
            <p className="text-error">{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button className='btn btn-secondary' onClick={handleLogOut}>Sign Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayErrorPage;