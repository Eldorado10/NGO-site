import React from 'react';
import certificate from '../../image/certificate.jpg'


const Certificate = () => {
    return (
        <div class="hero min-h-screen">      
  <div class="hero-content flex-col ">
    <div>
    <h1 class="text-5xl font-bold capitalize">Certificate From That Office</h1>
      <p className='my-5 capitalize'> on 27 December of 2022  we got our official permit</p>
    </div>
    <img src={certificate} class="max-w-sm md:max-w-lg rounded-lg shadow-2xl" />

  </div>
</div>
    );
}

export default Certificate;
