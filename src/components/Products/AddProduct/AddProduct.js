import React, { useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { checkWarranty } from '../ProductFunctions';

const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://182.163.101.173:49029/product-crud/products/category-name-wise-product-names')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handlerAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const productName = form.productName.value;
        const serialNo = form.serialNo.value;
        const purPrice = form.purPrice.value;
        const purDate = form.purDate.value;
        const warrantyPeriod = form.warrantyPeriod.value;
        const expDate = form.expDate.value;
        const inputImage = form.inputImage.value;

        console.log(category, productName, serialNo, purPrice, purDate, warrantyPeriod, expDate, inputImage);
        form.reset();
    }

    return (
        <>
            <input type="checkbox" id="add-inventory" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-3xl rounded-none">
                    <label htmlFor="add-inventory" className="btn bg-white border-0 text-black absolute right-2 top-2 hover:bg-white">✕</label>
                    <h3 className='text-xl text-center font-semibold'>Add New Product</h3>
                    <form onSubmit={handlerAddProduct} className="card-body text-modalTxt">
                        <div className="form-control grid grid-cols-3 items-center mb-2">
                            <label className="text-right mr-4">Category <span className='text-delBtn'>*</span></label>
                            <select name='category' id='optionCategory' className="select select-bordered rounded-none col-span-2" required>
                                {
                                    categories && categories.map(category => <option
                                        key={category.name}
                                        value={category.name}
                                    >{category.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control grid grid-cols-3 items-center mb-2">
                            <label className="text-right mr-4">Product Name <span className='text-delBtn'>*</span></label>
                            <select name='productName' className="select select-bordered rounded-none col-span-2" required>
                                <option>Desktop</option>
                            </select>
                        </div>
                        <div className="form-control grid grid-cols-3 items-center mb-2">
                            <label className="text-right mr-4">Serial Number</label>
                            <input type="text" name='serialNo' className="input input-bordered rounded-none col-span-2" />
                        </div>
                        <div className="form-control grid grid-cols-3 items-center mb-2">
                            <label className="text-right mr-4">Purchase Price <span className='text-delBtn'>*</span></label>
                            <input type="number" name='purPrice' className="input input-bordered rounded-none col-span-2" required />
                        </div>
                        <div className="form-control grid grid-cols-3 items-center mb-3">
                            <label className="text-right mr-4">Purchase Date <span className='text-delBtn'>*</span></label>
                            <input type="date" name='purDate' min="2020-01-01" max="2024-01-01" className="input input-bordered rounded-none col-span-2" required />
                        </div>
                        <div className="form-control grid grid-cols-3 items-center">
                            <label></label>
                            <div className='text-left'>
                                <input onClick={checkWarranty} type="checkbox" id='warrantyCheck' name='warrantyCheck' className="checkbox rounded-none w-4 h-4 mr-1" />
                                <label htmlFor="warrantyCheck">Has Warranty</label>
                            </div>
                        </div>
                        <div id='warrantyFields' className='hidden'>
                            <div className="form-control grid grid-cols-3 items-center mb-2">
                                <label className="text-right mr-4">Warranty <span className='text-delBtn'>*</span></label>
                                <input type="number" name='warrantyPeriod' className="input input-bordered rounded-none col-span-2" required />
                            </div>
                            <div className="form-control grid grid-cols-3 items-center mb-2">
                                <label className="text-right mr-4">Warranty Expire Date <span className='text-delBtn'>*</span></label>
                                <input type="date" name='expDate' min="2023-05-01" max="2027-05-01" className="input input-bordered rounded-none col-span-2" required />
                            </div>
                        </div>
                        <div className="form-control grid lg:grid-cols-3 items-center my-8">
                            <label></label>
                            <div className='text-left md:block'>
                                <label htmlFor="inputImage" className='text-black border border-borderColor rounded px-2 py-4 hover:cursor-pointer'>
                                    <span className='bg-borderColor rounded-full px-1 pb-1'>
                                        <AiOutlineCamera className='inline text-lg'></AiOutlineCamera>
                                    </span> Add Image <span className='text-delBtn'>*</span>
                                    <input name='inputImage' type="file" accept='image/png, image/jpg' id='inputImage' className="rounded-none h-10 mr-1 hidden" required />
                                </label>
                                <img src="" alt="" className='w-40' />
                            </div>
                        </div>
                        <button className='text-editBtn font-semibold flex justify-end items-center mb-8'>
                            <BsFillPlusCircleFill className='mr-1'></BsFillPlusCircleFill>
                            Add more Product
                        </button>
                        <div className="flex justify-end">
                            <label htmlFor="add-inventory" className="btn btn-outline border-delBtn text-delBtn rounded-none px-5 py-2 mr-3 hover:bg-white hover:border-delBtn hover:text-delBtn">Cancel</label>
                            <button type='submit' className="btn bg-editBtn text-white border-0 rounded-none px-6 py-2 hover:bg-editBtn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;