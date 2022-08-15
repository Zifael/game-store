import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';


const ErrorPage = () => {

    const navigate = useNavigate()
    
    return (
        <div className='error'>
            <div className='error__content'>
                <h2 className='error__title'>Oops!</h2>
                <div className='error__code'>404 - Page not found</div>
                <p className='error__description'>
                    The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                </p>
                <button onClick={() => navigate('/')} className='error__goBackHome'>Go to homepage</button>
            </div>
        </div>
    )
}

export default ErrorPage