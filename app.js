
let numeroSecreto = 0
let intentos=0;
//console.log((numeroSecreto));

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario)
    console.log(numeroSecreto);
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
   
    console.log(numeroDeUsuario===numeroSecreto)
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoAElemento('p',`Acertaste el numero en ${intentos} ${intentos===1 ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroDeUsuario>numeroSecreto){
        //El usuario no acerto
        asignarTextoAElemento('p','El numero secreto es menor')
        intentos++;
        limpiarCaja();
    } else {
        asignarTextoAElemento('p','El numero secreto es mayor')
        intentos++;
        limpiarCaja();
    }
    return;
}

function asignarTextoAElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales() {
    asignarTextoAElemento('h1','¡Juego del número secreto!');
    asignarTextoAElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //dar el mensaje de inicio-Indicar mensaje de intervalo de numeros aleatorios
    //Generar un nuevo numero secreto
    //Inicializar el numero de eventos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

