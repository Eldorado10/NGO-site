import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import './css/custom.css'


const MakeAdif = () => {
    return (
        <div className='box  base-500 text-center   mx-32 my-20 '>
            <h1 className='font-bold tracking-wide  text-black text-4xl font-serif hover:italic mb-10'>
                Make a diffrence 
            </h1>
            <p className='text-sky-500 mb-5 '>
            Support the cause you believe in and be With Humanity. Everywhere.
            </p>
            <PrimaryButton>Donate</PrimaryButton>
        </div>
    );
}

export default MakeAdif;
