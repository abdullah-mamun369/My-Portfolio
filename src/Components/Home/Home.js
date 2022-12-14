import React from 'react';
import About from './Home Children/About';
import Contact from './Home Children/Contact';
import HeroBanner from './Home Children/HeroBanner';
import Portfolio from './Home Children/Portfolio';

const Home = () => {
    return (
        <div>
            <section>
                <HeroBanner></HeroBanner>
                <About></About>
                {/* <Portfolio></Portfolio> */}
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;