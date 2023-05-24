import React from 'react';
import '../Home/css/button.css'

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className=" btn-grad  uppercase tracking-[.25em]">{children}</button>
        </div>
    );
};

export default PrimaryButton;