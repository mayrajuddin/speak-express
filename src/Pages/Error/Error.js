import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className='d-flex align-items-center justify-content-center e-div'>
            <div className='error'>
                <h2 className='text-uppercase fw-bold'>oops !</h2>
                <p className='text-uppercase fs-4'>404 - page can't be found</p>
                <Link to='/' className='bg-primary fs-4 rounded text-light px-3 text-decoration-none py-2'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;