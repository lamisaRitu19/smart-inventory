import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteProduct = () => {
    const handlerDeleteProduct = event => {
        event.preventDefault();
    }

    return (
        <>
            <input type="checkbox" id="delete-product" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handlerDeleteProduct} className="modal-box text-center">
                    <p className='my-5'>
                        <span className='bg-delBtnBg rounded-full px-6 py-7'>
                            <RiDeleteBinLine className='inline text-delBtn text-4xl rounded-full'></RiDeleteBinLine>
                        </span>
                    </p>
                    <p className="my-9 font-semibold">Are you sure you want to delete this product?</p>
                    <div className="modal-action">
                        <label htmlFor="delete-product" className="btn btn-outline border-2 border-delBtn text-delBtn rounded px-6 py-1 mr-3 hover:bg-white hover:border-delBtn hover:text-delBtn">No</label>
                        <button type='submit' className="btn bg-delBtn text-white border-0 rounded px-6 py-1 hover:bg-delBtn">Yes</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default DeleteProduct;