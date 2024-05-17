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

function loginUser(username="Aman"){ //if no username value is given by the user then by default we take it as Aman...so that it doesnt go undefined
    if(username===undefined){
        console.log("please enter the username!");
        return
    }
    return`${username} just logged in`
}
console.log(loginUser("shahnawaz"));
//**********************lec-20******************** */
function calculateCartPrice(...num1){//rest operator..if ni lagaenge toh only first value print hoga
    return num1
}
console.log(calculateCartPrice(200,400,500));

function calculateCartPrice2(val1,val2,...num1){//val1 and val2 takes the first two arguments and the rest are past as array using rest operator(...)
    return num1
}
console.log(calculateCartPrice2(200,400,500,5432,7543));

const user={
    usename:"aman",
    price:499
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.usename} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    usename:"Sam",
    price:199
})

const arr=[100,200,300,400]
function SecondValue(getArray){
    return getArray[1]
}
console.log(SecondValue(arr));
console.log(SecondValue([100,200,300,400,500,600]));//works the same directly too