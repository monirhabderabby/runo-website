import React from 'react';
import Banner from './Banner';
import PopulerTopics from './Populer topics/PopulerTopics';
import Quotes from './Quotes/Quotes';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopulerTopics />
            <Quotes />
        </div>
    );
};

export default Home;