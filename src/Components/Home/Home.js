import React from 'react';
import About from './Home Children/About';
import Blogs from './Home Children/Blogs';
import Contact from './Home Children/Contact';
import Footer from './Home Children/Footer';
import HeroBanner from './Home Children/HeroBanner';
import Portfolio from './Home Children/Portfolio';

const Home = () => {
    return (
        <div>
            <section>
                <HeroBanner></HeroBanner>
                <About></About>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Blogs></Blogs>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Home;