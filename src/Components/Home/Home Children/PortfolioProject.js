import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../Home.css'

const PortfolioProject = ({ project }) => {

    const { image, title, github, livesite, description } = project

    return (
        <div className='portfolio-sample'>
            <img className='rounded-lg' src={image} alt="" />
            <div className='overlay'>
                <div className='content'>
                    <h1 className='text-xl font-bold uppercase mb-3'>{title}</h1>
                    <p className='text-sm font-extralight mb-3'>{description}</p>
                    <div className='flex'>
                        <a href={livesite} target='_blank' rel='noreferrer'><button type='submit' className='  text-white rounded-md bg-primary mr-5 w-20 h-8 opacity-100'>Live</button></a>
                        <a href={github} target='_blank' rel='noreferrer'><button type='submit' className='  text-white rounded-md bg-primary mr-5 w-20 h-8 opacity-100'>Source</button></a>
                        <Link to='/project-details' target='_blank'><button type='submit' className='  text-white rounded-md bg-primary mr-5 w-20 h-8 opacity-100'>Details</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PortfolioProject;