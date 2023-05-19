import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between px-4 pb-3'>
            <div className='text-gray text-sm'>&copy; Copyright 2022 | <a href='http://www.neural-semiconductor.com/' className='text-blue'>NSL</a></div>
            <div className='text-gray text-sm'>Terms & Condition | Help Center</div>
        </div>
    );
};

export default Footer;