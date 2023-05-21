import React from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { dateValue } from '../Products/ProductFunctions';

const TableRow = ({ product, products }) => {
    const {
        assetNumber,
        categoryName,
        productPhoto,
        productName,
        serialNumber,
        purchasePrice,
        warrantyInYears,
        purchaseDate
    } = product;



    return (
        <tr className='bg-tableBody text-black text-center border border-borderColor rounded-sm py-4 mb-2 lg:grid grid-cols-11'>
            <td className='py-3 lg:py-0'>{products.indexOf(product) + 1}</td>
            <td>{assetNumber}</td>
            <td>{categoryName}</td>
            <td><img src={productPhoto} alt="" className='w-7' /></td>
            <td className='col-span-2'>{productName}</td>
            <td>{serialNumber}</td>
            <td>{purchasePrice}</td>
            <td>{`${warrantyInYears} years`}</td>
            <td>{dateValue(purchaseDate)}</td>
            <td className='flex justify-center'>
                <label className='p-1 rounded hover:bg-tableHead mr-3'><FaEdit className='text-editBtn'></FaEdit></label>
                <label htmlFor='delete-product' className='p-1 rounded hover:bg-tableHead'><RiDeleteBin5Line className='text-delBtn'></RiDeleteBin5Line></label>
            </td>
        </tr>
    );
};

export default TableRow;