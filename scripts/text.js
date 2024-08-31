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

document.getElementById('italic-btn').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    if(marked === true){
        textField.style.fontStyle = 'italic';
        marked = false;
    }
    else{
        textField.style.fontStyle = 'normal';
        marked = true;
    }
})
document.getElementById('underline-btn').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    if(marked === true){
        textField.style.textDecoration = 'underline';
        marked = false;
    }
    else{
        textField.style.textDecoration = 'none';
        marked = true;
    }
})

// This is background color part
document.getElementById('bg-btn').addEventListener('click', function(){
    const colorField = document.getElementById('color-field')
    const colorFieldValue = colorField.value;
    const textField =document.getElementById('text-field');
    textField.style.backgroundColor = colorFieldValue;
})

