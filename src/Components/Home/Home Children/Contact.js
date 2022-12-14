import React from 'react';
import { FaDribbble, FaFacebookF, FaLinkedinIn, FaTwitter, FaUserAlt, FaWhatsapp } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';

import '../Home.css'
import { useForm } from 'react-hook-form';
import PrimaryBtn from '../../Buttons/PrimaryBtn';


const Contact = () => {


    const { register, handleSubmit } = useForm();


    return (
        <div className='w-screen h-screen bg-[#222]'>
            <div className='container max-w-7xl mx-auto'>
                {/* Heading */}
                <div className='grid mb-12'>
                    <h1 className='text-6xl font-black text-center pt-24 text-white uppercase'>Get <span className='text-primary'>In Touch</span></h1>
                    <div className='relative m-auto'>
                        <p className='text-base-300 mt-7 paragraph-design title-paragraph'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                    </div>
                </div>


                {/* Informations and contact form */}
                <div className='grid grid-cols-3 gap-4'>
                    <div className=''>
                        <div className='mb-8'>
                            <p className='text-base-300 mb-1'>Whatsapp</p>
                            <div className='flex items-center'>
                                <a className='text-primary' href="https://api.whatsapp.com/send?phone=8801620268953" alt='' target='_blank' rel='noreferrer'><FaWhatsapp></FaWhatsapp></a>
                                <a className='ml-2 text-white' href="https://api.whatsapp.com/send?phone=8801620268953" alt='' target='_blank' rel='noreferrer'>+8801620268953</a>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <p className='text-base-300 mb-1'>Email</p>
                            <div className='flex items-center'>
                                <a className='text-primary' href="mailto:mamunbd.contact@gmail.com" alt='' target='_blank' rel='noreferrer'><HiOutlineMail></HiOutlineMail></a>
                                <a className='ml-2 text-white' href="mailto:mamunbd.contact@gmail.com" alt='' target='_blank' rel='noreferrer'>mamunbd.contact@gmail.com</a>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <p className='text-base-300 mb-1'>GitHub</p>
                            <div className='flex items-center'>
                                <a className='text-primary' href="https://github.com/abdullah-mamun369" alt='' target='_blank' rel='noreferrer'><AiFillGithub></AiFillGithub></a>
                                <a className='ml-2 text-white' href="https://github.com/abdullah-mamun369" alt='' target='_blank' rel='noreferrer'>abdullah-mamun369</a>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <p className='text-base-300 mb-1'>Behance</p>
                            <div className='flex items-center'>
                                <a className='text-primary' href="https://www.behance.net/maamamun369" alt='' target='_blank' rel='noreferrer'><FaBehance></FaBehance></a>
                                <a className='ml-2 text-white' href="https://www.behance.net/maamamun369" alt='' target='_blank' rel='noreferrer'>maamamun369</a>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <p className='text-base-300 mb-2'>Social Profile</p>
                            <div className='flex items-center'>
                                <a className='text-primary w-8 h-8 rounded-full hover:bg-primary hover:text-white flex items-center justify-center border border-primary mr-5 transition duration-150 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]' href="https://www.facebook.com/mamun1300/" alt='' target='_blank' rel='noreferrer'><FaFacebookF></FaFacebookF></a>
                                <a className='text-primary w-8 h-8 rounded-full hover:bg-primary hover:text-white flex items-center justify-center border border-primary mr-5 transition duration-150 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]' href="https://www.linkedin.com/in/mamun-contact/" alt='' target='_blank' rel='noreferrer'><FaLinkedinIn></FaLinkedinIn></a>
                                <a className='text-primary w-8 h-8 rounded-full hover:bg-primary hover:text-white flex items-center justify-center border border-primary mr-5 transition duration-150 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]' href="https://twitter.com/" alt='' target='_blank' rel='noreferrer'><FaTwitter></FaTwitter></a>
                                <a className='text-primary w-8 h-8 rounded-full hover:bg-primary hover:text-white flex items-center justify-center border border-primary mr-5 transition duration-150 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]' href="https://dribbble.com/maamamun369" alt='' target='_blank' rel='noreferrer'><FaDribbble></FaDribbble></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 text-base-300'>
                        <p className='mb-5'>If you have any suggestion, project or even you want to say Hello.. please fill out the form <br /> below and I will reply you shortly.</p>
                        <form className='grid gap-5' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-8'>
                                <input className='h-12 p-5 border border-[#444] bg-[#333] rounded-full font-extralight text-sm' type="text" {...register("name", { required: 'Name required' })} placeholder="Your name" ></input>
                                <input className='h-12 p-5 border border-[#444] bg-[#333] rounded-full font-extralight text-sm' type="email" {...register("email", { required: 'Email required' })} placeholder="Your email" ></input>
                            </div>
                            <div>
                                <textarea className="textarea textarea-bordered w-full p-5 border border-[#444] bg-[#333] rounded-3xl font-extralight text-sm h-44" placeholder="Your message"></textarea>
                            </div>
                            <PrimaryBtn><TbMessages className='mr-3 text-xl'></TbMessages>Send message</PrimaryBtn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;