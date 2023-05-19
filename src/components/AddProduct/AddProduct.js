import React from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";

const AddProduct = () => {
    return (
        <div>
            <div className="card w-max text-center border-2">
                <h3 className='text-xl text-center font-semibold mt-4 mb-2'>Add New Product</h3>
                <div className="card-body text-modalTxt">
                    <div className="form-control grid grid-cols-3 items-center mb-2">
                        <label className="text-right mr-4">Contact <span className='text-delBtn'>*</span></label>
                        <select className="select select-bordered rounded-none col-span-2">
                            <option selected>Computer</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="form-control grid grid-cols-3 items-center mb-2">
                        <label className="text-right mr-4">Product Name <span className='text-delBtn'>*</span></label>
                        <select className="select select-bordered rounded-none col-span-2">
                            <option selected>Desktop</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="form-control grid grid-cols-3 items-center mb-2">
                        <label className="text-right mr-4">Serial Number</label>
                        <input type="text" className="input input-bordered rounded-none col-span-2" />
                    </div>
                    <div className="form-control grid grid-cols-3 items-center mb-2">
                        <label className="text-right mr-4">Purchase Price <span className='text-delBtn'>*</span></label>
                        <input type="text" className="input input-bordered rounded-none col-span-2" />
                    </div>
                    <div className="form-control grid grid-cols-3 items-center mb-3">
                        <label className="text-right mr-4">Purchase Date <span className='text-delBtn'>*</span></label>
                        <div className='col-span-2'>
                            <select className="select select-bordered rounded-none mr-4">
                                <option selected>1</option>
                            </select>
                            <select className="select select-bordered rounded-none mr-4">
                                <option selected>1</option>
                            </select>
                            <select className="select select-bordered rounded-none ">
                                <option selected>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control grid grid-cols-3 items-center">
                        <label></label>
                        <div className='text-left'>
                            <input type="checkbox" checked="checked" className="checkbox checkbox-primary rounded-none w-4 h-4 mr-1" />
                            <label>Has Warranty</label>
                        </div>
                    </div>
                    <div className="form-control grid grid-cols-3 items-center mb-2">
                        <label className="text-right mr-4">Warranty <span className='text-delBtn'>*</span></label>
                        <select className="select select-bordered rounded-none col-span-2">
                            <option selected>Computer</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="form-control grid grid-cols-3 items-center mb-2">
                        <label className="text-right mr-4">Warranty Expire Date <span className='text-delBtn'>*</span></label>
                        <div className='col-span-2'>
                            <select className="select select-bordered rounded-none mr-4">
                                <option selected>1</option>
                            </select>
                            <select className="select select-bordered rounded-none mr-4">
                                <option selected>1</option>
                            </select>
                            <select className="select select-bordered rounded-none ">
                                <option selected>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control grid grid-cols-3 items-center">
                        <label></label>
                        <div className='text-left'>
                            <input type='image' alt='' className="file-input  rounded-none w-4 h-4 mr-1" />
                            <img src="" alt="" className='w-40' />
                        </div>
                    </div>
                    <button className='text-editBtn font-semibold flex justify-end items-center mb-8'>
                        <BsFillPlusCircleFill className='mr-1'></BsFillPlusCircleFill>
                        Add more Product
                    </button>
                    <div className="flex justify-end">
                        <button className="btn btn-outline border-delBtn text-delBtn rounded-none px-5 py-2 mr-3">Cancel</button>
                        <button className="btn bg-editBtn text-white border-0 rounded-none px-6 py-2">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;