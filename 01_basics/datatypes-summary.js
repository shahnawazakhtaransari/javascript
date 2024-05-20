//js is dynamically typed
//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//non primitive
//Array, objects , functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//returns false as values are not same as they are given diff symbols

const heroes=["ironman","hulk","Loki"];
let myobj={
    name:"shahnawaz",
    age: 22,
}

const myFunction= function(){
    console.log("Hello World !");
}

console.log(typeof scoreValue);
console.log(typeof myFunction);//returns object function as a type
console.log(typeof heroes);//object
/**typeof operators value:
 * undefined=undefined
 * Null=object //imp in interviews
 * boolean=boolean
 * symbol=symbol
 * number and string as it is=number and string
 */

//=================================================================
//memory
//stack(primitive)here we get call by value that is exact copy
//heap(non-primitive or reference)here we get call by reference
let myYoutubename="Deen and Motivation"
let anothername= myYoutubename
anothername="nawaz codes"
console.log(myYoutubename);
console.log(anothername);
//heap i.e non primitive (object)
let userOne={
    email:"user@google.com",
    Upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="heheh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
//value of both of them gets changed because of call by reference
