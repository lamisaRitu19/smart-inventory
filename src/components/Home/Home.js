import Table from '../Table/Table';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData();
    const [displayProducts, setDisplayProducts] = useState(products);

    const handleSearch = async (event) => {
        const search = document.getElementById('search').value;
        const matched = products.find(product => product.id === parseInt(search));

        if (search && matched) {
            try {
                const response = await fetch(`http://182.163.101.173:49029/product-crud/products/${search}`, {
                    method: "GET",
                    headers: {
                        "apiKey": "r2N0zvMjBcJZa45Jql9fR/f6r7KmogqGsntwHGTcqc4=",
                        "Content-Type": "application/json"
                    }
                });
                if (!response.ok) {
                    const status = response.status;
                    toast.error(`Network status: ${status}.`);
                    throw new Error(`Network status: ${status}`);
                }
                const result = await response.json();
                setDisplayProducts(result);
            }
            catch (error) {
                console.error("Error: ", error);
            }
        } else if (search && !matched) {
            setDisplayProducts(null);
        } else {
            setDisplayProducts(products);
        }
    }

    return (
        <div className='p-6 h-screen'>
            <div className='text-center md:flex justify-between items-baseline mb-6'>
                <div className='mb-3 md:mb-0'>
                    <label htmlFor="add-inventory" className="bg-addBtn text-white font-semibold px-3 py-2">Add Inventory</label>
                </div>
                <div className='w-72 mx-auto md:mx-0'>
                    <input onChange={handleSearch} id='search' type="text" placeholder={`Search ID`} className="input input-bordered w-full max-w-xs bg-white border-borderColor text-black" />
                </div>
            </div>
            <Table products={displayProducts}></Table>
        </div>
    );
};

export default Home;