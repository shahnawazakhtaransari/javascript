const name="shahnawaz"
const repoCount="5"

// console.log(name + repoCount + "valuess") ...its out dated
console.log(`Hello my name is${name} and my repo Count is ${repoCount}`); //string interpolation
const gameName = new String("shahnawazz-z") //object type hai
console.log(gameName[0]);
console.log(gameName.__proto__);// all objects functions and method available here

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('z'));
console.log(gameName.lastIndexOf('z'));

const newString=gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8 ,1)
console.log(anotherString);

const newStringOne="   abcd  g  1  "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.replace('a','x'));
console.log(newString.includes('xbc'));

console.log(anotherString.split('a'));