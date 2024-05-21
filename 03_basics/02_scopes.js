// {}// it is the scope of every where in many programming languages//function scope, global scope,lexical scope,local scope
// //var c =300

// if(true){
//     let a=10
//     const b=20
//     var c=30// a or b cant be printed as they are defined only in the scope of if...var is also declared in if but it shows the output = this is the reason we dont use var
// }

// //console.log(a);
// //console.log(b);
// console.log(c);

//            2nd explaination
// let a=300//global scope
// if (true){
//     a=30//block scope
//     console.log("INNER: ",a);
// }

// console.log(a);

//...next lecturee

function one(){
    const username="Shahnawaz"

    function two(){
        const website="Github"
        console.log(username);

    }
    //console.log(website);
    two()
}
one()
//inner function can access outer function but outer function cant access inner function
if(true){
    const username="Ansari"
    const website="Google"
    console.log(username+" "+website);
}
//===========interesting=============
console.log(addOne(5));//runs smoothly though it is declared later
function addOne(num){
    return num+1
}
//console.log(addTwo(5));//shows error=showing it cant access
// reason as we have also hold the variable 2nd time,1st time we had only declared
const addTwo= function(num){
    return num+2
}
console.log(addTwo(5));