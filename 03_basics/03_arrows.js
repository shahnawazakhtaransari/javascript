const user={
    username:"shahnawaz",
    price:799,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}    
// user.welcomeMessage()
// user.username="Aman"
// user.welcomeMessage()
//console.log(this);//shows {}

//+++++++++++++++++++++arrow+++++++++++++++++++
//1st!
// function chai(){
//     console.log(this);//shows lots of value here
// }
// chai()

//2nd   
// const chai=function(){
//     let username="nawaz"
//     console.log(this.username );
// }
// chai()
//3rdd
const chai=()=>{   //this is called arrow function
    let username="nawaz"
     console.log(this);//myth busted that we cannot use this in arrow functions
 }
chai()
//basic arrow function
// const addTwoo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwoo(4,8.5))

//implicit return arrow function

const addTwoo=(num1,num2)=> (num1+num2)//()use krne p return keyword likhna ni padega...curly braces mai likhna padega return
console.log(addTwoo(4,8.5))