import React from 'react';
import '../Home.css'

const About = () => {
    return (
        <div className='w-screen h-screen bg-[#222]'>
            <div className='container mx-auto grid'>
                <h1 className='text-6xl font-black text-center pt-20 text-white uppercase'>About <span className='text-primary'>Me</span></h1>
                <div className='relative m-auto'>
                    <p className='text-base-300 mt-7 paragraph-design title-paragraph'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                </div>

            </div>
        </div>
    );
};

export default About;