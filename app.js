alert('Hola mundo');
let secretNumber= 6;
let userNumber = prompt("Me indicas un numero por favor");
console.log(userNumber);

/*
This code make the comparison 
*/

if (userNumber==secretNumber) {
    //true condition
    alert(`You guess the number this is ${secretNumber}`);
}else {
    //false condition
    alert('Sorry wrong number');
};