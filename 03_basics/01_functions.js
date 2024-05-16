//function is nothing but a set of code which we have written and bind it together to use it in future n number of times!
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H");
    console.log("N");
    console.log("A");
    console.log("w");
    console.log("A");
    console.log("Z");
}
//sayMyName() //()is used to execute a function
function addTwonumbers(num1,num2){ //num1 and num2 here are called parameters
    // console.log(num1+num2);
    // let result = num1+num2
    // return result// the lines after return in a function is never executed
    return(num1+num2)
}
const result = addTwonumbers(5,10)
console.log("Result is", result);
//5 and 10 here are called arguments...nomenclature here is important

function loginUser(username){
    return`${username}just logged in`
}
console.log(loginUser("shahnawaz!"));