import React from 'react';
import '../Home.css'
import aboutImg from "../../../assets/about-img.png"
import myresume from '../../../assets/resume.pdf'
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='w-screen h-screen bg-[#222]'>
            <div className='container mx-auto grid mb-12'>
                <h1 className='text-6xl font-black text-center pt-24 text-white uppercase'>About <span className='text-primary'>Me</span></h1>
                <div className='relative m-auto'>
                    <p className='text-base-300 mt-7 paragraph-design title-paragraph'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                </div>
            </div>

            <div className='container mx-auto grid grid-cols-2 gap-4'>
                <div className='image-design before:animate-spin'>
                    <img className='w-5/6 image-design ' src={aboutImg} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-28'>
                    <div className=' text-base-300'>
                        <div className='grid gap-9'>
                            <p>First Name : <span className='text-white ml-4'> Mamun</span></p>
                            <p>Last Name : <span className='text-white ml-4'> Abdullah</span></p>
                            <p>Birthdate : <span className='text-white ml-4'> 24th November 1994</span></p>
                            <p>Nationality : <span className='text-white ml-4'> Bangladeshi</span></p>
                            <p>Experience : <span className='text-white ml-4'> UI/UX (5yr)</span></p>
                            <p>Address : <span className='text-white ml-4'> Cumilla, Bangladesh</span></p>
                        </div>
                    </div>
                    <div className=' text-base-300'>
                        <div className='grid gap-9'>
                            <p>Job Availability : <span className='text-white ml-4'> Fulltime</span></p>
                            <p>Language : <span className='text-white ml-4'> Bengali(Native), English</span></p>
                            <p>Phone : <span className='text-white ml-4'> +8801892656515</span></p>
                            <p>Email : <span className='text-white ml-4'> mamunbd.contact@gmail.com</span></p>
                            <p>Whatsapp : <span className='text-primary ml-4'><a href="https://api.whatsapp.com/send?phone=8801620268953" alt='' target='_blank' rel='noreferrer'>Send Message</a></span></p>
                            <p>LinkedIn : <span className='text-primary ml-4'><a href="https://www.linkedin.com/in/mamun-contact/" alt='' target='_blank' rel='noreferrer'>Visit Profile</a></span></p>
                        </div>
                    </div>
                    <a href={myresume} download={myresume}><button type='submit' className='btn border-none  text-white rounded-full bg-primary button-section mr-5 px-8'><FaDownload className='mr-3 animate-bounce'></FaDownload> DOWNLOAD RESUME</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;