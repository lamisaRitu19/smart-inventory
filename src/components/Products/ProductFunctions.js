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