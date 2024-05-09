let mydate= new Date()
console.log(mydate);
console.log(mydate.toString());

console.log(mydate.toDateString());

console.log(mydate.toISOString());

console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());

console.log(mydate.toLocaleString());
console.log(mydate.getTimezoneOffset());
console.log(typeof mydate);//date is an object
let myCreatedDate=new Date(2024,4,9)//the month in javascripts start with 0
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleDateString());

let myCreatedDateandTime=new Date(2024,4,9,15,5)
console.log(myCreatedDateandTime.toDateString());
console.log(myCreatedDateandTime.toLocaleString());

let oneMoreDate = new Date("2000-08-22");
console.log(oneMoreDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);//shows in milisecond..to having it in seconds we need to divide by 10
console.log(Date.now())

console.log(myCreatedDate.getTime());

console.log(myCreatedDate.getTime());