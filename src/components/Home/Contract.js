import React from 'react';
import contact_img1 from '../../image/contract/dalia2.jpg'
import contact_img2 from '../../image/contract/dalia1.jpg'
import contact_img3 from '../../image/contract/dalia3.jpg'
import './css/contract.css'

const Contract = () => {
    return (
        <section class="articles mt-5">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={contact_img3}alt="" />
      </figure>
      <div class="article-tittle">
        <h2>Salma Jahan Kajol</h2>
        <p>
          Chairman
        </p>
        <a href="#" class="read-more">
        <svg className='icon mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          01815410755 <span class="sr-only">Call FOR Any details</span>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={contact_img1} alt="" />
      </figure>
      <div class="article-tittle">
        <h2>Sanjida Binte Saleh</h2>
        <p>
          General Secretary
        </p>
        <a href="#" class="read-more">
        <svg className='icon mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          01791686174 <span class="sr-only">Call FOR Any details</span>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={contact_img2} alt="" />
      </figure>
      <div class="article-tittle ">
        <h2>Rabina Akter</h2>
        <p>
          Finance Secretary
        </p>
        <a href="#" class="read-more">
        <svg className='icon mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          01810678892 <span class="sr-only">Call FOR Any details</span>
        </a>
      </div>
    </div>
  </article>
</section>
        
        
       
    );
}

export default Contract;
