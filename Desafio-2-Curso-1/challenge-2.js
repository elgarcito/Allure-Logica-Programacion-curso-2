//10-Pregunta al usuario qué día de la semana es. 
//Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
// De lo contrario, muestra "¡Buena semana!".
let question = prompt("¿Que dia de la semana es?")
if(question=="Sabado" || question=="sabado"|| question=="Domingo" || question=="domingo"){
    alert("¡Buen fin de semana!")
}else{
    alert("¡Buena semana");
}
//2-Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let number = prompt("ingrese el numero")
if(number>0){
    alert("numero positivo");
}else if (number<0){
    alert("numero negativo");
}else{
    alert("Es cero u otra cosa");
};

//3Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra 
//"¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let points = prompt("ingrese el puntuacion")
if(points>=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo nuevamente para ganar.");
};

//4-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = prompt("ingrese su saldo");
alert(`Su saldo es ${saldo}`);

//5-Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("ingrese su nombre");
alert(`Su nombre es ${nombre}`);
