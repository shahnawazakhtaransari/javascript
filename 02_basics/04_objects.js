const bumbleUser=new Object()//singleton object
const tinderUser={}//non Singleton object
console.log(bumbleUser);
console.log(tinderUser);
tinderUser.id="12345"
tinderUser.name="Aman"
tinderUser.isLoggedin=false
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shahnawaz",
            lastname:"Ansari"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname.firstname);// ? is used to check if we have got that value then print firstname otherwise dont!
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}//object ke andar objects banjaenge..not recommended...............1st method of joining
//const obj3= Object.assign({},obj1,obj2)//watch video again for using empty{} reason ...........2nd method of joining
//console.log(obj3);   

const obj3={...obj1,...obj2}//spread operator mostly used..and easiest of them all
console.log(obj3);

const users=[
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//prints as error..very much used in project
console.log(Object.values(tinderUser));//printing values the same way as keys
console.log(Object.entries(tinderUser));//used lesser
console.log(tinderUser.hasOwnProperty('name'));//good practice to check for a property without actually using it

// ===============de-structuring======================== lec18
const course={
    coursename:"js in hindi",
    courseinstructor:"Hitesh Chowdhary",
    courseprice:"999"
}
//course.courseinstructor
const {courseinstructor}= course
console.log(courseinstructor);

// const navbar=({company})=>{  //used in react....destructuring of objects

// }
// navbar(company="Hitesh")
//============API= apna kaam kisi aur ke sar p dal dena============
/**value from backend used to come in xml structure now it comes in the form of json files 
*/
// { //api calling by json
//     "name":"Hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }
[
    {},
    {},
    {},
    {},
]