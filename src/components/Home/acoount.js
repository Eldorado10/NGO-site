import React from 'react';
import './css/accountDetails.css'

const Acoount = () => {
    return (
        <div class="account">
        <div class="ter font-bold capitalize">
            <div className='my-5'>
                <h1 className='my-5 p5 tracking-widest text-xl md:text-3xl text-primary'>
                BANK ACCOUNT DETAILS
                </h1>
                <p>
                Directly Send Your Donations into the following bank account via NEFT/IMPS/RTGS​
                </p>
            </div>
          <div className=''>
          <p> Account Name : SARBOJONIN JAHAN NARI O SHISHU UNNOYON SHOSTHA </p>
          <p> Account Number  : 0237102000070</p>
          <p> Account Type : JOINT ACCOUNT  </p>
          <p> Bank : PUBALI BANK </p>
          </div>
        </div>
      </div>
    );
}

export default Acoount;
