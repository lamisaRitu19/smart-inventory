import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState(products);

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


    const info = {
        products, setProducts,
        displayProducts,
        setDisplayProducts
    }

    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;