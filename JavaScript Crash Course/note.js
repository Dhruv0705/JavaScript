//DATA TYPE//
    //String//
console.log('Hello World' + ' ' + '100')
console.log('Dhruv' [0])
console.log('Dhruv'.length)
    //Length//
let str= 'Dhruv'
console.log(str[str.length-1])
    //Type//
console.log(typeof'David')
console.log(typeof 5)
    //Operator//
console.log(10*10*0.5+500-100/10)
console.log(17 % 2)
    //Boolean//
console.log (5>10)
console.log (5<10)
    //Variables//
// var, let, const//
let fullName = 'Dhruv Patel'
let isRaining = true
let temperature = 20
let planet = 'Earth'

temperature = temperature + 2
console.log(temperature)

//const - cannot change the value will remain constant value //
//let - Can change the value multiple times 
console.log('______________________________________________')
    //Converting Temperatures//
        //F=C x 1.8 + 32//
let celsius = 10
let fahrenheit = ((celsius * 1.8) + 32)
console.log(fahrenheit)
console.log('______________________________________________')
    //Equality//
    //== ===//
//== checks the values//
//=== checks the values and the type//
//!= not equal too opposite of === ==//
let bool = '1' == 1
console.log(bool)
let boo = '1' ===1
console.log(boo)
console.log('______________________________________________')
//CONDITIONAL//
let subscribe = false
let loggedIn = true
if (subscribe === true){
    console.log('show the video')
}
else if (loggedIn ===true){
    console.log('tell user to upgrade their subscription')
}
else {
    console.log('tell user to log into account')
}
console.log('______________________________________________')

    //Statements//
let cash=50
let price=40
let difference = cash-price

if(cash > price){
    console.log("you paid extra" + ' $' + (difference) + ' '+ "here's your change")
}
else if(cash === price){
    console.log("you paid the exact amount, have a nice day!")
}
else{
    console.log("not enough money - you still owe" + ' $' + (difference * -1)+ ' '+ "dollars")
}
console.log('______________________________________________')

    //Tendary Operator//
let hot =false
hot ? console.log('weather is hot') : console.log('weather is cold')
console.log('______________________________________________')

let subscribed = false
let loggedin = true
let str1 = subscribed || loggedIn ? 'show the video' : 'hide the video'
console.log(str1)
console.log('______________________________________________')

let cash1= 50
let price1= 30
let isStoreOpen = true
let str2= cash>=price || isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(str2)
console.log('______________________________________________')

//LOOPS//
//For, While, Do while loop//
let count=1;
while (count <=5){
    console.log(count)
    count = count+1;
}
console.log('______________________________________________')

for (let i=0; i<3; i++){
    console.log(i);
}
console.log('______________________________________________')



