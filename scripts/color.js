// font size part
document.getElementById('number-field').addEventListener('change', function (event) {
    let numberValue = event.target.value;
    const textField = document.getElementById('text-field');
    textField.style.fontSize = numberValue + 'px';
})
// text color part
document.getElementById('color-field').addEventListener('mouseenter', function (event) {
    const colorField = event.target.value;
    const textField = document.getElementById('text-field');
    textField.style.color = colorField;
})
// change background color part
document.getElementById('bg-btn').addEventListener('click', function () {
    const colorField = document.getElementById('color-field')
    const colorFieldValue = colorField.value;
    const textField = document.getElementById('text-field');
    textField.style.backgroundColor = colorFieldValue;
})