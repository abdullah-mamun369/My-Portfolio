import React from 'react';
import About from './Home Children/About';
import HeroBanner from './Home Children/HeroBanner';

const Home = () => {
    return (
        <div>
            <section>
                <HeroBanner></HeroBanner>
                <About></About>
            </section>
        </div>
    );
};

export default Home;