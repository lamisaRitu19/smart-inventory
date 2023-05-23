import React, { useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { editCheckWarranty } from '../ProductFunctions';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const EditProduct = ({ categories, setCategories, pID }) => {
    // const storedProduct = useLoaderData();
    // console.log(storedProduct);
    const [categoryProducts, setCategoryProducts] = useState([]);
    // const [storedProduct, setStoredProduct] = useState(null);
    // const [editProduct, setEditProduct] = useState(storedProduct);
    // console.log(editProduct);

    // depending on category type product data is set
    const handleCategory = () => {
        const optionCategory = document.getElementById('editOptionCategory').value;
        setCategoryProducts(categories[optionCategory].products);
    }

    // useEffect(() => {
    //     fetch(`http://182.163.101.173:49029/product-crud/products/${pID}`, {
    //         method: "GET",
    //         headers: {
    //             "apiKey": "r2N0zvMjBcJZa45Jql9fR/f6r7KmogqGsntwHGTcqc4=",
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setStoredProduct(data);
    //         })
    // }, [pID])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const categoryVal = form.category.value;
        const category = categories[categoryVal].name;
        const productName = form.productName.value;
        const serialNo = form.serialNo.value;
        const purPrice = form.purPrice.value;
        const purDate = form.purDate.value;
        const warrantyPeriod = form.warrantyPeriod.value;
        const expDate = form.expDate.value;
        const inputImage = form.inputImage.value;

        const editProductObj = {
            "id": pID,
            "categoryName": category,
            "productName": productName,
            "serialNumber": serialNo,
            "purchasePrice": purPrice,
            "purchaseDate": purDate,
            "warrantyInYears": warrantyPeriod,
            "warrantyExpireDate": expDate
        }
        // setEditProduct(editProductObj);
        setProduct(editProductObj);
        form.reset();
        // console.log(category, productName, serialNo, purPrice, purDate, warrantyPeriod, expDate, inputImage);
    }

    const setProduct = async (editProductObj) => {
        try {
            const response = await fetch(`http://182.163.101.173:49029/product-crud/products/${pID}`, {
                method: 'PUT',
                headers: {
                    "apiKey": "r2N0zvMjBcJZa45Jql9fR/f6r7KmogqGsntwHGTcqc4=",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editProductObj)
            });
            console.log(response);
            if (!response.ok) {
                const status = response.status;
                toast.error(`Network status: ${status}. Fill up the form correctly!`);
                throw new Error(`Network status: ${status}. Fill up the form correctly!`);
            }
            const result = await response.json();
            console.log(result);
            toast.success('Product successfully updated!');
        }
        catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <>
            <input type="checkbox" id="edit-inventory" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-3xl rounded-none">
                    <label htmlFor="edit-inventory" className="btn bg-white border-0 text-black absolute right-2 top-2 hover:bg-white">✕</label>
                    <h3 className='text-xl text-center font-semibold'>Edit This Product</h3>
                    <form onSubmit={handleSubmit} className="card-body text-modalTxt">
                        <div className="form-control grid grid-cols-3 items-center mb-2">
                            <label className="text-right mr-4">Category <span className='text-delBtn'>*</span></label>
                            <select onChange={handleCategory} name='category' id='editOptionCategory' className="select select-bordered rounded-none col-span-2" required>
                                {
                                    categories && categories.map(
                                        (category, i) => <option
                                            key={i}
                                            value={i}
                                        >{category.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control grid grid-cols-3 items-center mb-2">
                            <label className="text-right mr-4">Product Name <span className='text-delBtn'>*</span></label>
                            <select name='productName' className="select select-bordered rounded-none col-span-2" required>
                                {
                                    categoryProducts && categoryProducts.map(
                                        (pr, i) => <option
                                            key={i}
                                            value={pr.name}
                                        >{pr.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control grid grid-cols-3 items-center mb-2">
                            <label className="text-right mr-4">Serial Number</label>
                            <input type="number" name='serialNo' className="input input-bordered rounded-none col-span-2" />
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
                                <input onClick={editCheckWarranty} type="checkbox" id='editWarrantyCheck' name='warrantyCheck' className="checkbox rounded-none w-4 h-4 mr-1" />
                                <label htmlFor="warrantyCheck">Has Warranty</label>
                            </div>
                        </div>
                        <div id='editWarrantyFields' className='hidden'>
                            <div className="form-control grid grid-cols-3 items-center mb-2">
                                <label className="text-right mr-4">Warranty <span className='text-delBtn'>*</span></label>
                                <input type="number" name='warrantyPeriod' className="input input-bordered rounded-none col-span-2" />
                            </div>
                            <div className="form-control grid grid-cols-3 items-center mb-2">
                                <label className="text-right mr-4">Warranty Expire Date <span className='text-delBtn'>*</span></label>
                                <input type="date" name='expDate' min="2023-05-01" max="2027-05-01" className="input input-bordered rounded-none col-span-2" />
                            </div>
                        </div>
                        <div className="form-control grid lg:grid-cols-3 items-center my-8">
                            <label></label>
                            <div className='text-left md:block'>
                                <label htmlFor="inputImage" className='text-black border border-borderColor rounded px-2 py-4 hover:cursor-pointer'>
                                    <span className='bg-borderColor rounded-full px-1 pb-1'>
                                        <AiOutlineCamera className='inline text-lg'></AiOutlineCamera>
                                    </span> Add Image <span className='text-delBtn'>*</span>
                                    <input name='inputImage' type="file" accept='image/png, image/jpg' id='inputImage' className="rounded-none h-10 mr-1 hidden" />
                                </label>
                                <img src="" alt="" className='w-40' />
                            </div>
                        </div>
                        <button className='text-editBtn font-semibold flex justify-end items-center mb-8'>
                            <BsFillPlusCircleFill className='mr-1'></BsFillPlusCircleFill>
                            Add more Product
                        </button>
                        <div className="flex justify-end">
                            <label htmlFor="edit-inventory" className="btn btn-outline border-delBtn text-delBtn rounded-none px-5 py-2 mr-3 hover:bg-white hover:border-delBtn hover:text-delBtn">Cancel</label>
                            <button type='submit' className="btn bg-editBtn text-white border-0 rounded-none px-6 py-2 hover:bg-editBtn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditProduct;