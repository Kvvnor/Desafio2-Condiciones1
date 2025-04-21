let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let button = document.querySelector(".btn-verify");
let result = document.querySelector(".result");


// Agrego un evento al botón    
button.addEventListenener("click", () => {

    let value1 = input1.value;
    let value2 = input2.value;
    let value3 = input3.value;

    let result = value1 + value2 + value3;

})


