import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import MakeAdif from './MakeAdif';
import Acoount from './acoount';
import Certificate from './certificate';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <MakeAdif></MakeAdif>
            <Certificate></Certificate>
            <Acoount></Acoount>
            <Footer></Footer>
        </div>
    );
}

export default Home;
