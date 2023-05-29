import React from 'react';
import '../Home/css/button.css'
import { Link } from 'react-router-dom';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <Link className='btn-group btn-grad' to="/donate">{children}</Link>
        </div>
    );
};

export default PrimaryButton;