import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import Table from '../Table/Table';

const Home = () => {
    return (
        <div className='p-6'>
            <div className='text-center md:flex justify-between items-baseline mb-6'>
                <div className='mb-1 md:mb-0'>
                    <button className="bg-addBtn text-white font-semibold px-3 py-2">Add Inventory</button>
                </div>
                <div className='w-72 mx-auto md:mx-0'>
                    <input type="text" placeholder={`Search here`} className="input input-bordered w-full max-w-xs bg-white border-borderColor text-black" />
                </div>
            </div>
            <Table></Table>
        </div>
    );
};

export default Home;