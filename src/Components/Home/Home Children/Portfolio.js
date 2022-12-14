import React from 'react';
import { Tab } from '@headlessui/react'
import '../Home.css'

const Portfolio = () => {
    return (
        <div className='w-screen h-screen bg-[#222]'>
            <div className='container mx-auto'>
                <div className='container mx-auto grid mb-12'>
                    <h1 className='text-6xl font-black text-center pt-24 text-white uppercase'>My <span className='text-primary'>Portfolio</span></h1>
                    <div className='relative m-auto'>
                        <p className='text-base-300 mt-7 paragraph-design title-paragraph'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                    </div>
                </div>
                <Tab.Group>
                    <Tab.List className={'text-white'}>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </Tab.List>
                    <Tab.Panels className={'text-white'}>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};

export default Portfolio;