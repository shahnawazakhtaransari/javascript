//Immediately Invoked Function Expressions(IIFE)
// (function chai(){
//     console.log('DB connected');
// })()//we can use parenthesis instead of a block(seen in last lecture) then we can use it as a block

//()()    (we will write function definition here)(we will write function execution here)

//why do we use iife?
//A lot of time we have problem with global scopes pollution..so we use iife to remove them
(function chaii(){//named IIFE
    console.log('hello');
} )();
((name)=>{ //un-named IIFE with a parameter
    console.log(`world ${name}`);
} )('nawaz')