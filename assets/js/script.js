imagen = document.querySelector("img");

imagen.addEventListener ("click", function() {
    if (imagen.style.border) {
        (imagen.style.border = "");
    }
    else {
        (imagen.style.border = "2px solid red");
    }

});
