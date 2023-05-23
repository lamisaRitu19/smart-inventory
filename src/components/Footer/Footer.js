import React from 'react';

const Footer = () => {
    return (
        <div className='sm:flex justify-between px-4 py-3'>
            <div className='text-gray text-sm'>&copy; Copyright 2022 | <a href='http://www.neural-semiconductor.com/' className='text-blue'>NSL</a></div>
            <div className='text-gray text-sm'>Terms & Condition | Help Center</div>
        </div>
    );
};

export default Footer;