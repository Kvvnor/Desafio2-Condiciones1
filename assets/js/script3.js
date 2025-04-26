let option1 = document.querySelector('.select1');
let option2 = document.querySelector('.select2');
let option3 = document.querySelector('.select3');
let button = document.querySelector('.btn');
let result = document.querySelector('.event');

button.addEventListener('click', () => {

    let val1 = option1.value;
    let val2 = option2.value;
    let val3 = option3.value;

    let password = val1 + val2 + val3;
    console.log(password);

    if (password === "911") {
        result.innerHTML = "Password 1 correcto";
    } else if (password === "714") {
        result.innerHTML = "Password 2 correcto";
    } else {
        result.innerHTML = "Password incorrecto";
    }

});