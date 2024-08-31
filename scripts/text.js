// font bold part
let marked = true;
document.getElementById('bold-btn').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    if (marked === true) {
        textField.style.fontWeight = 'bold';
        marked = false;
    }
    else {
        textField.style.fontWeight = 'normal';
        marked = true;
    }
})
// font italic part
document.getElementById('italic-btn').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    if (marked === true) {
        textField.style.fontStyle = 'italic';
        marked = false;
    }
    else {
        textField.style.fontStyle = 'normal';
        marked = true;
    }
})
// text underline part
document.getElementById('underline-btn').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    if (marked === true) {
        textField.style.textDecoration = 'underline';
        marked = false;
    }
    else {
        textField.style.textDecoration = 'none';
        marked = true;
    }
})