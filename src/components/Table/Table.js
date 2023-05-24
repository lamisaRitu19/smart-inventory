import { useContext, useEffect, useState } from 'react';
import TableRow from './TableRow';
import AddProduct from '../Products/AddProduct/AddProduct';
import EditProduct from '../Products/EditProduct/EditProduct';
import DeleteProduct from '../Products/DeleteProduct/DeleteProduct';
import { Context } from '../../context/ContextProvider';

const Table = ({ products, setProducts }) => {
    const [categories, setCategories] = useState([]);
    const [pID, setPID] = useState(null);
    console.log(products);

    // to check the 'products' value and type, if there is only one product
    let arrayP = null;
    if (Array.isArray(products)) {
        arrayP = true;
    }
    console.log(arrayP);

    // category types data is fetched
    useEffect(() => {
        fetch('http://182.163.101.173:49029/product-crud/products/category-name-wise-product-names')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
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
                    {
                        products ? <tbody>
                            {
                                (products && products.length > 1) ? products.map(
                                    (product, i) => <TableRow
                                        key={product.id}
                                        index={i}
                                        product={product}
                                        setPID={setPID}
                                    ></TableRow>) :
                                    <TableRow
                                        key={arrayP ? products[0].id : products?.id}
                                        index={0}
                                        product={arrayP ? products[0] : products}
                                        setPID={setPID}
                                    ></TableRow>
                            }

                        </tbody> : <tbody></tbody>
                    }
                </table>
            </div>

            <AddProduct
                categories={categories}
                setCategories={setCategories}
            ></AddProduct>
            <EditProduct
                categories={categories}
                setCategories={setCategories}
                pID={pID}
                products={products}
                setProducts={setProducts}
            ></EditProduct>
            <DeleteProduct
                pID={pID}
                setProducts={setProducts}
            ></DeleteProduct>
        </div>
    );
};

export default Table;