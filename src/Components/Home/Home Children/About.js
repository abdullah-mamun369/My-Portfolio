import React from 'react';

const About = () => {
    return (
        <div className='w-screen h-screen bg-[#222]'>
            <div className='container mx-auto'>
                <h1 className='text-6xl font-black text-center pt-20 text-white uppercase'>About <span className='text-primary'>Me</span></h1>
                <p className='text-center text-base-300 mt-7 before:divide-x before:divide-white before:divide-solid'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
            </div>
        </div>
    );
};

export default About;