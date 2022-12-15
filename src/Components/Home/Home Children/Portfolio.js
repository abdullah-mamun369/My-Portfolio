import { Tab } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import '../Home.css'
import PortfolioProject from './PortfolioProject';

const Portfolio = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // Category data fetch===========================================
    const { data: categories = [] } = useQuery({
        queryKey: ['categories',],
        queryFn: async () => {
            const res = await fetch('http://localhost:1000/categories');
            const data = await res.json();
            return data
        }
    })


    // Projects data fetch========================================
    const { data: projects = [] } = useQuery({
        queryKey: ['projects',],
        queryFn: async () => {
            const res = await fetch("http://localhost:1000/projects");
            const data = await res.json();
            return data
        }
    })


    return (
        <div className='w-screen h-screen bg-[#222]'>
            <div className='container mx-auto'>
                <div className='container mx-auto grid mb-12'>
                    <h1 className='text-6xl font-black text-center pt-24 text-white uppercase'>My <span className='text-primary'>Portfolio</span></h1>
                    <div className='relative m-auto'>
                        <p className='text-base-300 mt-7 paragraph-design title-paragraph'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                    </div>
                </div>
                <div>
                    <Tab.Group>
                        <Tab.List className={'flex space-x-7  justify-center items-center mb-10'}>
                            {
                                categories.map(category => <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            'text-md font-light leading-5 ',
                                            selected
                                                ? 'text-white bg-primary px-5 py-2 rounded-md font-semibold'
                                                : 'text-white hover:text-primary'
                                        )
                                    }
                                    key={category._id}
                                >{category.category}</Tab>)
                            }
                        </Tab.List>
                        {
                            projects.map(project => <PortfolioProject
                                key={project._id}
                                project={project}
                            ></PortfolioProject>)
                        }
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;