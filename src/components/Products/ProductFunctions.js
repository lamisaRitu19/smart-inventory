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