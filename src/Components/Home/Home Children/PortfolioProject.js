import { Tab } from '@headlessui/react';
import React from 'react';

const PortfolioProject = ({ project }) => {
    console.log(project);

    const { image } = project



    return (
        <Tab.Panels className={'text-white text-center'}>
            <Tab.Panel> <img src={image} alt="" /></Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
            <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
    );
};

export default PortfolioProject;