//if
const isUserLoggedIn=true
if(isUserLoggedIn){//will execute

}
// if(false){//will not execute till the scope of if
// }
if(2=="2"){//returns true irrespective of datatype
    console.log("executed");
}
if(2==="2"){
    console.log("executed");//returns false..so no output
}
//=== checks for type also...its called strict equal

//const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);//returns undefined as power is defined only in the scope of if

//++++++++++++++short-hand notation++++++++++++++++


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");//shorthand notation
//very immature code and not practical..not a good practice
//======================================================
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }
//========mutli condition==========
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}