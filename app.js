
let numeroSecreto = generarNumeroSecreto();

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario===numeroSecreto);
}

function asignarTextoAElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}


asignarTextoAElemento('h1','¡Juego del número secreto!');
asignarTextoAElemento('p','Indica un número del 1 al 10');