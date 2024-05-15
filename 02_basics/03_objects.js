//singleton= when we make objects with constructor then it's Singleton
//when we declare objects like literals then it is not singleton
//Object.create //creates object through constructor (singleton)
const mySym=Symbol("key1")
//object literals
const JsUser={
    name:"Shahnawaz",//key:values
    "full name":"Shahnawaz Akhtar Ansari",
   // mySym:"mykey1",//symbol is being used as a string 
    [mySym]:"mykey1",//now used as a symbol
    age:23,
    email:"iamshaz786@gmail.com",
    location:"kolkata",
    loggedIN:false,
    lastloggedin:["mon","fri"]
}//object named jsUser was created
// console.log(email.JsUser); //gives as email object wasnt defined i.e not works vice versa
console.log(JsUser.email);//usual way of accesing object values
console.log(JsUser["email"]);//another way " " is imp as js considers all keys as string
console.log(JsUser["full name"]);//[] printing with square bracket is imp for interview
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);// imp for interviews...

JsUser.email="shahnawaz@gmail.com"//we can overwrite values with =
//Object.freeze(JsUser) //no changes can be made after this
//JsUser.email="abcd@gmail.com"
console.log(JsUser);

//functions
JsUser.greeting= function(){
    console.log("hello Js user");
}
console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`);//string interpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());