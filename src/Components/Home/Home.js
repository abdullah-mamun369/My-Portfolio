import React from 'react';
import About from './Home Children/About';
import HeroBanner from './Home Children/HeroBanner';
import Portfolio from './Home Children/Portfolio';

const Home = () => {
    return (
        <div>
            <section>
                <HeroBanner></HeroBanner>
                <About></About>
                <Portfolio></Portfolio>
            </section>
        </div>
    );
};

export default Home;