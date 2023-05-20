import React from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const TableRow = () => {
    return (
        <tr className='bg-tableBody text-black text-center border border-borderColor rounded-sm py-4 mb-2 lg:grid grid-cols-11'>
            <td className='py-3 lg:py-0'>1</td>
            <td>Malcolm Lockyer</td>
            <td>Laptop</td>
            <td><img src="" alt="" className='w-7' /></td>
            <td className='col-span-2'>HP Probook 440 GB</td>
            <td>A3105622</td>
            <td>880250</td>
            <td>3 years</td>
            <td>22 October, 2022</td>
            <td className='flex justify-center'>
                <label className='p-1 rounded hover:bg-tableHead mr-3'><FaEdit className='text-editBtn'></FaEdit></label>
                <label htmlFor='delete-product' className='p-1 rounded hover:bg-tableHead'><RiDeleteBinLine className='text-delBtn'></RiDeleteBinLine></label>
            </td>
        </tr>
    );
};

export default TableRow;