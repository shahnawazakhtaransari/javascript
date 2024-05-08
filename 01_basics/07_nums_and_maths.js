const score=212
//console.log(score);
const balance= new Number(1000)
//console.log(balance);

//console.log(balance.toString());
//console.log(typeof(balance));

//console.log(balance.toFixed(1));

const otherNumber=23.8976
//console.log(otherNumber.toPrecision(4));
const hundreds = 100000
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toLocaleString('en-in'));// indian standard k hisab se commas lgega

//================maths============
console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(7.435));
console.log(Math.random());// values are always between o and 1
console.log((Math.random()*10)+1);// we have shifted the value to left but sometimes the values which comes is 1..therefore we added 1
console.log(Math.sqrt(25));
console.log(Math.min(1,2,56,73,0));

const  min=10
const max=100

console.log(Math.floor(Math.random()*(max-min + 1))+min); //refer to lec 11 again for explaination
