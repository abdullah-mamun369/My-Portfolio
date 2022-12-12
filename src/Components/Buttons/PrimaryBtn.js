import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button className='btn border-none  text-white rounded-full bg-primary button-section mr-5 px-8'>{children}</button>
        </div>
    );
};

export default PrimaryBtn;