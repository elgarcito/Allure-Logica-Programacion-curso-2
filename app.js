alert('Hola mundo');
//Changing the number that we multiply the Math.random() we increase or decrease the chances
let maxNumber=10;
let secretNumber= Math.floor((Math.random()*maxNumber)+1);
let userNumber=0;
let tries=0;
const maxTries=3;
console.log(secretNumber);

while (secretNumber!=userNumber) {
    userNumber = parseInt(prompt(`Me indicas un numero por favor entre 1 y ${maxNumber} por favor`));
    console.log(userNumber);
    /*
    This code make the comparison */
    if (userNumber===secretNumber) {
        //true condition
        alert(`You guess the number this is ${secretNumber} you use ${tries} ${tries==1 ? 'try':"tries"} `);
    }else if(userNumber>secretNumber){
        //false condition
        alert('the secret number is lower');
        tries++;
    }else if (userNumber<secretNumber){
        alert("The secret number is higher");
        tries++;
    };
    if (tries>=maxTries){
        alert(`Game over number max of tries ${maxTries}`);
        break;
    }
}