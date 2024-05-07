let score="33"
//console.log(typeof (score))
let valueInNumber= Number(score)
//console.log(typeof (valueInNumber))
//"33"=33
//"33abc"=NaN(not a number)
//true=1; false=0;
//undefined=undefined
let loggedIn="asd"
let booleanIsLoggedIn= Boolean(loggedIn)
//console.log(booleanIsLoggedIn)
//boolean value for a string
//""=false
//"adasf"=true


let someNumber=786
let stringNumber= String(someNumber)
//console.log(stringNumber);
//console.log(typeof (stringNumber));
//***********************************operations***********************************/
//lec 7
let value=37
let negvalue=-value
//console.log(negvalue);
//console.log(2+2);
//console.log(2-2);
//console.log(2%2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);


let str1="Hello "
let str2="Shahnawaz!"
let str3=str1+str2
//console.log(str1+str2);//prints the same output
//console.log(str3);

//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+2+3);//phle wala ka type hi consider kiya jaega 
//console.log(1+2+"3");
//console.log(3+4*5);
//====================special conversion=================
console.log(+true);
console.log(+true);//1
console.log(+"");//0

let num1,num2,num3
num1=num2=num3=2+2//sab mai same value assigned
console.table([num1,num2,num3])
let c=10
c++; //post increment
console.log(c);
++c; //pre increment
console.log(c);