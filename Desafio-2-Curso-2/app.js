//1-Crear una función que muestre "¡Hola, mundo!" en la consola.
function funcionHolaMundo() {
    console.log('¡Hola, mundo!')
}

//2-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function funcionHolaMundoConNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`)
}

//3-Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero) {
    return (numero*2);
}

console.log("El doble de 2 es: "+dobleNumero(2));

//4-Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioTresNumeros(num1,num2,num3) {
    return ((num1+num2+num3)/3);
}
console.log("Promediando 2,3,5 "+promedioTresNumeros(2,3,5).toFixed(2));
//5- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function compareNumbers(num1,num2) {
    if (num1>num2) {
        return num1;
    }else{
        return num2;
    }
}
console.log("Comparando 5 y 8, el mayor es: "+compareNumbers(5,8));

//6-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numPorSiMismo(num) {
    return num*num; 
}
console.log("5 Multiplicado por si mismo es: "+ numPorSiMismo(5));