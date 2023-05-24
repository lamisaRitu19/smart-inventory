import Table from '../Table/Table';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData();
    const [displayProducts, setDisplayProducts] = useState(products);

    // const { products, setProducts, displayProducts, setDisplayProducts } = useContext(Context);
    // setDisplayProducts(products);
    // useEffect(() => {
    //     fetch('http://182.163.101.173:49029/product-crud/products', {
    //         method: "GET",
    //         withCredentials: true,
    //         headers: {
    //             "apiKey": "r2N0zvMjBcJZa45Jql9fR/f6r7KmogqGsntwHGTcqc4=",
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             //default product list
    //             setProducts(data);
    //         });
    // }, [products]);

    const handleSearch = event => {
        const search = document.getElementById('search').value;
        const matched = products.find(product => product.id === parseInt(search));

        if (search && matched) {
            setDisplayProducts(matched);
            console.log('Search & matched', matched, displayProducts);
        }
        else if (search && !matched) {
            setDisplayProducts(null);
            console.log('Search & !matched', matched);
        }
        else {
            setDisplayProducts(products);
            console.log('Else Search & matched', matched);
        }
    }
    console.log(displayProducts);


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
            <Table products={displayProducts} setProducts={setDisplayProducts}></Table>
        </div>
    );
};

export default Home;