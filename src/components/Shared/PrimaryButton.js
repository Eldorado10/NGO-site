import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-wide btn-primary uppercase tracking-[.50em] text-white font-bold bg-gradient-to-r from-secondary to-primary my-5">{children}</button>
        </div>
    );
};

export default PrimaryButton;