let titulo = document.querySelector('h1');
titulo.innerHTML=('Hora del Desafío');

function botonClickeado(){
    alert("El botón fue clicado")
}

function clickBotonPrompt(){
    let ciudad = prompt('Escribe el nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de tí`)
}

function clickBotonAlert(){
    alert('Yo amo JS');
}
function clickBotonSuma() {
    let primerNumero = parseInt(prompt("Dame un numero"));
    let segundoNumero = parseInt(prompt("Dame otro numero"));
    alert(`La suma del primer numero ${primerNumero} y el segundo numero ${segundoNumero} es ${primerNumero+segundoNumero}`)
}