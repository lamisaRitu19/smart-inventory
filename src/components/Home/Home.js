import Table from '../Table/Table';
import AddProduct from '../Products/AddProduct/AddProduct';
import DeleteProduct from '../Products/DeleteProduct/DeleteProduct';
import { useEffect, useState } from 'react';

const Home = () => {
    const [addProduct, setAddProduct] = useState(null);

    // useEffect(() => {
    //     fetch('http://182.163.101.173:49029/product-crud/products', {
    //         method: "POST",
    //         headers: {
    //             "apiKey": "r2N0zvMjBcJZa45Jql9fR/f6r7KmogqGsntwHGTcqc4=",
    //             'Content-Type': 'application/json'
    //         }, 
    //         body: JSON.stringify(addProduct)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])

    const handleSearch = event => {
        const search = document.getElementById('search').value;
        console.log(search);
    }

    return (
        <div className='p-6'>
            <div className='text-center md:flex justify-between items-baseline mb-6'>
                <div className='mb-3 md:mb-0'>
                    <label htmlFor="add-inventory" className="bg-addBtn text-white font-semibold px-3 py-2">Add Inventory</label>
                </div>
                <div className='w-72 mx-auto md:mx-0'>
                    <input onBlur={handleSearch} id='search' type="text" placeholder={`Search here`} className="input input-bordered w-full max-w-xs bg-white border-borderColor text-black" />
                </div>
            </div>
            <Table></Table>
            <AddProduct></AddProduct>
            <DeleteProduct></DeleteProduct>
        </div>
    );
};

export default Home;