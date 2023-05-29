import React from 'react';

import img from '../../Banner/banner1.png'
import PrimaryButton from '../Shared/PrimaryButton';


const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={img} alt='' class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Join our dream!</h1>
      <p class="py-6">Help us to improve Our Bangladesh. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et inventore doloribus facere maxime dolores sapiente facilis harum. Excepturi accusantium quibusdam quidem aperiam molestias culpa hic, quis rerum? Temporibus, quia!</p>
      <h3 className='font-bold tracking-wide text-xl'>Click to Donate Now</h3>
      <h3 className='font-serif tracking-wide my-2 '>A 100% volunteer based international muslim relief organization.</h3>
      <PrimaryButton>Donate</PrimaryButton>
    </div>
    
  </div>
</div>
    );
};

export default Banner;