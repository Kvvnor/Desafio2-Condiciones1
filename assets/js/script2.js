let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let button = document.querySelector('.btn-verify');
let result = document.querySelector('.event');


// Agrego un evento al botón    
button.addEventListener('click', () => {

    let val1 = parseInt(input1.value) || 0;
    let val2 = parseInt(input2.value) || 0;
    let val3 = parseInt(input3.value) || 0;

    let total = val1 + val2 + val3;

// Agrego mensaje según el total de stickers
    if (total <= 10) {
        result.textContent = "Llevas " + total + " stickers";
    }   else {
        result.textContent = "Llevas demasiados stickes";
    }

});
