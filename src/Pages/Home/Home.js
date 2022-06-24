import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import EditorsPick from './EditorsPick/EditorsPack';
import PopulerTopics from './Populer topics/PopulerTopics';
import Quotes from './Quotes/Quotes';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopulerTopics />
            <Quotes />
            <EditorsPick />
            <Footer />
        </div>
    );
};

export default Home;