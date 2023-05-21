import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const Table = () => {
    const [products, setProducts] = useState(null);
    // console.log(products.length);

    useEffect(() => {
        fetch('http://182.163.101.173:49029/product-crud/products', {
            method: "GET",
            withCredentials: true,
            headers: {
                "apiKey": "r2N0zvMjBcJZa45Jql9fR/f6r7KmogqGsntwHGTcqc4=",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='relative overflow-x-auto'>
            <table className="table-auto w-full">
                <thead>
                    <tr className='bg-tableHead text-black py-3 mb-2 lg:grid grid-cols-11'>
                        <th className='p-3 lg:p-0'>SL</th>
                        <th className='p-3 lg:p-0'>Asset No.</th>
                        <th className='p-3 lg:p-0'>Category</th>
                        <th className='p-3 lg:p-0'>Image</th>
                        <th className='col-span-2 p-3 lg:p-0'>Product Name</th>
                        <th className='p-3 lg:p-0'>Serial No.</th>
                        <th className='p-3 lg:p-0'>Price</th>
                        <th className='p-3 lg:p-0'>Warranty</th>
                        <th className='p-3 lg:p-0'>Purchase Date</th>
                        <th className='p-3 lg:p-0'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(product => <TableRow
                            key={product.id}
                            products={products}
                            product={product}
                        ></TableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;