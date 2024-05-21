const userEmail="iamshaz786@gmail.com"
if(userEmail){
    console.log("true");
}else{
    console.log("false");
}

const userEmaill=""
if(userEmaill){
    console.log("true");
}else{
    console.log("false");
}//empty means no value therefore outputs false

//falsy values
//thse are:  false,0,-0(used mostly in interviews),BigInt 0n,"",null,undefined,NaN

//truthy values...empty str array object function all are truthy
//"0",'false'," ",[],(),function(){}
// if(userEmaill.length===0){
//     console.log("Array is empty");
// }
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Obj is empty");

}
// +++++++++
// for interviews:
// false==0
// returns true
// false==''
// returns true
// 0==''
// returns true

//Nullish Coalescing Operator(??):null undefined this operator is used for fallback or error
let val1;
//val1=5??10// here 5 is assigned
//val1=null??10//here 10 is assigned
//val1=undefined??10//15 is assigned
val1=null??10??20//10 is assigned
console.log(val1);

//nullish operator is different from ternary operator

//ternary operator
//condition?true:false
const Ballprice=100
Ballprice<=200?console.log(true):console.log(false)