alert('Hola mundo');
let secretNumber= 6;
let userNumber=0;
let counter=0;

while (secretNumber!=userNumber) {
    userNumber = prompt("Me indicas un numero por favor");
    console.log(userNumber);
    /*
    This code make the comparison */
    if (userNumber==secretNumber) {
        //true condition
        alert(`You guess the number this is ${secretNumber} the number of tries were: ${counter}`);
    }else if(userNumber>secretNumber){
        //false condition
        alert('the secret number is lower');
        counter+=1;
    }else if (userNumber<secretNumber){
        alert("The secret number is higher");
        counter+=1;
    };
}