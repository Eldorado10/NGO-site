import React from 'react';
import '../Donation/donate.css'
import bkash from './Qrimg/bkash.jpeg'
import nagad from './Qrimg/nagad.jpg'

const Donation = () => {
    return (
        <section class="flex w-full">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={bkash} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={nagad} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Nagad</h2>
    <p className='capitalize'> Open Nagad App and scan the qr</p>
    
  </div>
</div>
        </section>
    );
}

export default Donation;
