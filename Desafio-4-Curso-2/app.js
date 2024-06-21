//1-Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];

//2-Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con 
//los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

//3-Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');


//4-Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function listaEnOrden(lenguajesDeProgramacion) {
    lenguajesDeProgramacion.forEach(element => {
        console.log(element);
    });
}

listaEnOrden(lenguajesDeProgramacion);

//5-Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function listaOrdenInverso(lenguajesDeProgramacion) {
    for (let index = lenguajesDeProgramacion.length-1; index>=0; index--) {
        console.log(lenguajesDeProgramacion[index]);
    }
}


listaOrdenInverso(lenguajesDeProgramacion);


//6-Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLista(arrayConNumeros) {
    let result =0;
    arrayConNumeros.forEach(element => {
        result+=element;
    });
    return result/arrayConNumeros.length;
}

console.log(promedioLista([5,6]))

//7-Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function muestraMayorYMenor(array) {
    let maxNumber= array.reduce((previous,current)=>{
        return current>previous ? current: previous;
    })
    console.log('El numero mayor es: '+maxNumber);
    let minNumber= array.reduce((previous,current)=>{
        return current<previous ? current: previous;
    });
    console.log('El numero menor es: '+minNumber);
}
muestraMayorYMenor([10,5,9,77,8]);

//8-Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaElementos(array) {
    let sum=0;
    array.forEach(element=>{
        sum+=element;
    })
    return sum;
}
lenguajesDeProgramacion.is
console.log("La suma de los elementos del array son: "+sumaElementos([2,3,5]));

//9-Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro,
// o -1 si no existe en la lista.
function filtrar(array,elementoABuscar) {
    return array.indexOf(elementoABuscar);

}

console.log("indice del objeto 2 en el array [0,6,8,2,5] es: "+filtrar([0,6,8,2,5],2));

//10-Crea una función que reciba dos listas de números del mismo tamaño 
//y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(array1,array2) {
    let nuevaLista =[];
    for (let index = 0; index < array1.length; index++) {
        nuevaLista.push(array1[index]+array2[index]);
    }
    console.log(nuevaLista);
    return nuevaLista;
}

console.log('Sumando las listas [1,3,5] y [5,3,1] da como resultado: '+sumarListas([1,7,5],[5,3,1]))
//11-Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDeLista(array) {
    let nuevaLista=[];
    
    array.forEach(element => {
        nuevaLista.push(element*element);
    });
    return nuevaLista;
}
console.log('El cuadrado del cada numero en la lista [1,3,5] es: '+cuadradoDeLista([1,3,5]))