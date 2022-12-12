import React from 'react';

const Navbar = () => {
    return (
        <div className='absolute flex h-screen items-center -mx-[195px] '>
            <div className='rotate-90 fixed'>
                <button className='rounded-t-xl px-3 py-1 bg-primary font mr-2 text-sm text-white'>Home</button>
                <button className='rounded-t-xl px-3 py-1 bg-primary font mr-2 text-sm text-white'>ABOUT</button>
                <button className='rounded-t-xl px-3 py-1 bg-primary font mr-2 text-sm text-white'>PORTFOLIO</button>
                <button className='rounded-t-xl px-3 py-1 bg-primary font mr-2 text-sm text-white'>CONTACT</button>
                <button className='rounded-t-xl px-3 py-1 bg-primary font text-sm text-white'>BLOG</button>
            </div>
        </div>
    );
};

export default Navbar;