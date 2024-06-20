//1-Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let counter1 = 0;
while (counter1<11) {
    alert(counter1);
    counter1+=1;
}
//2-Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let counter2 = 10;
while (counter2>=0) {
    alert(counter2);
    counter2-=1;
}
//3-Crea un programa de cuenta progresiva. 
//Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let number =parseInt(prompt('Ingrese un numero entero'));
if(number>0){
    while(number>=0){
        alert(number);
        number-=1;
    }
}else if(number<0){
    while(number<=0){
        alert(number);
        number+=1;
    }
}else{
    alert(number);
}

//4-Crea un programa de cuenta progresiva. 
//Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let number2 =parseInt(prompt('Ingrese un numero entero'));
let counter4 =0;
if(number2>0){
    while(counter4<=number2){
        alert(counter4);
        counter4+=1;
    }
}else if(number2<0){
    while(counter4>=number2){
        alert(counter4);
        counter4-=1;
    }
}