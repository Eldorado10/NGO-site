import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import MakeAdif from './MakeAdif';
import Acoount from './acoount';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <MakeAdif></MakeAdif>
            <Acoount></Acoount>
            <Footer></Footer>
        </div>
    );
}

export default Home;
