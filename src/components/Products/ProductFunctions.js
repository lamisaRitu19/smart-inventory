export const checkWarranty = () => {
    const checkBox = document.getElementById('warrantyCheck');
    const checkFields = document.getElementById('warrantyFields');
    if (checkBox.checked) {
        checkFields.style.display = 'block';
    }
    else {
        checkFields.style.display = 'none';
    }
}
export const editCheckWarranty = () => {
    const checkBox = document.getElementById('editWarrantyCheck');
    const checkFields = document.getElementById('editWarrantyFields');
    if (checkBox.checked) {
        checkFields.style.display = 'block';
    }
    else {
        checkFields.style.display = 'none';
    }
}

export const dateValue = purchaseDate => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const fullDate = new Date(purchaseDate);
    const date = fullDate.getDate();
    const month = monthNames[fullDate.getMonth()];
    const year = fullDate.getFullYear();
    return `${date} ${month}, ${year}`;
}


// const [addProduct, setAddProduct] = useState(null);
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