import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import { Helmet } from 'react-helmet-async';
import News from '../../News/News';
import History from '../../History/History';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music || Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <News></News>
            <History></History>

        </div>
    );
};

export default Home;