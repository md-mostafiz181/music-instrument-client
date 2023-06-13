import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music || Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>

        </div>
    );
};

export default Home;