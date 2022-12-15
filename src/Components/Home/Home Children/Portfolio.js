import { Tab } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import '../Home.css'
import PortfolioProject from './PortfolioProject';

const Portfolio = () => {

    const [projects, setProjects] = useState([])

    console.log(projects);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // Category data fetch===========================================
    const { data: categories = [] } = useQuery({
        queryKey: ['categories',],
        queryFn: async () => {
            const res = await fetch('https://my-portfolio-server-topaz.vercel.app/categories');
            const data = await res.json();
            return data
        }
    })
    const { data: allProjects = [] } = useQuery({
        queryKey: ['projects',],
        queryFn: async () => {
            const res = await fetch('https://my-portfolio-server-topaz.vercel.app/projects');
            const data = await res.json();
            return data
        }
    })


    const getCategory = (category) => {
        const projectCategory = category.category;
        console.log(projectCategory);
        fetch(`https://my-portfolio-server-topaz.vercel.app/projects/?category=${projectCategory}`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }


    return (
        <div className='w-screen  bg-[#222] min-h-screen'>
            <div className='container mx-auto'>
                <div className='container mx-auto grid mb-12'>
                    <h1 className='text-6xl font-black text-center pt-24 text-white uppercase'>My <span className='text-primary'>Portfolio</span></h1>
                    <div className='relative m-auto'>
                        <p className='text-base-300 mt-7 paragraph-design title-paragraph'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                    </div>
                </div>
                <div>
                    <Tab.Group>
                        <Tab.List className={'flex space-x-7  justify-center items-center mb-6'}>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'text-md font-light leading-5 ',
                                        selected
                                            ? 'text-white bg-primary px-5 py-2 rounded-md font-semibold'
                                            : 'text-white hover:text-primary'
                                    )
                                }
                            >All</Tab>
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
                                    onClick={() => getCategory(category)}
                                >{category.category}</Tab>)
                            }
                        </Tab.List>

                        <Tab.Panels className={'text-white text-center'}>
                            <Tab.Panel className={"grid grid-cols-3 gap-8"}>
                                {
                                    allProjects.map(project => <PortfolioProject
                                        key={project._id}
                                        project={project}
                                    ></PortfolioProject>)
                                }
                            </Tab.Panel>
                            {
                                categories.map(category => <Tab.Panel className={"grid grid-cols-3 gap-8"} key={category._id} >
                                    {
                                        projects.map(project => <PortfolioProject
                                            key={project._id}
                                            project={project}
                                        ></PortfolioProject>)
                                    }
                                </Tab.Panel>)
                            }

                        </Tab.Panels>

                    </Tab.Group>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;