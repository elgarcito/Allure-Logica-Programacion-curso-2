//1-Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros
// y peso en kilogramos, que se recibirán como parámetros.
function calculoIMC(alturaMetros,pesoKg) {
    return pesoKg/(alturaMetros^2);
}
console.log("Si su peso es 70kg y su altura es 1.73metros su ICM es: "+calculoIMC(1.73,70))

//2-Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(number) {
    if (number===1) {
        return number;
    } else {
        let result =number;
        let control=(number-1);
        while (control>0) {
            result=result*control;
            control--;
        }
        return result;
    }
}

console.log('El factorial de 4 es : '+factorial(4))

//3-Crea una función que convierta un valor en dólares, pasado como parámetro, 
//y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
//Para esto, considera la cotización del dólar igual a R$4,80.

function conversorDeMoneda(valorUsd) {
    return valorUsd*1023;
}
console.log('A una cotizacion de 1023 pesos/dolar el cambio de 1000 USD es : '+conversorDeMoneda(1000))


//4-Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura 
//y la anchura que se proporcionarán como parámetros.

function perimetroYAreaRectangular(altura,anchura) {
    alert(`El perimetro para las dimensiones dadas son ${altura+anchura}`);
    alert(`El area para las dimensiones dadas son ${altura*anchura}`);
}

perimetroYAreaRectangular(parseInt(prompt('Ingrese altura rectangulo')),parseInt(prompt('Ingrese ancho rectangulo')));

//5-Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.


function perimetroYAreacircular(radio) {
    alert(`El perimetro para las dimensiones dadas son ${2*3.14*radio}`);
    alert(`El area para las dimensiones dadas son ${3.14*(radio^2)}`);
}

perimetroYAreacircular(parseInt(prompt('Ingrese radio circunferencia')));

//6-Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(number) {
    let multiplicador=0;
    while(multiplicador<10){
        alert(`Valores de la tabla del ${number}, ${number}x${multiplicador}=${number*multiplicador}`)
        multiplicador++;10
    }
}
tablaDeMultiplicar(5);