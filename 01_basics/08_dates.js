let mydate= new Date()
console.log(mydate);//gives 2024-05-14T18:38:40.629Z (not so readable)
console.log(mydate.toString());//gives complete date wed may 15 12:04 with GMT

console.log(mydate.toDateString());//only date in words

console.log(mydate.toISOString());//2024-05-14T18:39:46.090Z(not so readable)

console.log(mydate.toJSON());//same as ISOString
console.log(mydate.toLocaleDateString()); //prints int the format generally written in copies 5/14/2024

console.log(mydate.toLocaleString());//5/14/2024, 6:40:42 PM
console.log(mydate.getTimezoneOffset());//0
console.log(typeof mydate);//date is an object
let myCreatedDate=new Date(2024,4,9)//the month in javascripts start with 0
console.log(myCreatedDate.toLocaleString());

console.log(myCreatedDate.toLocaleDateString());

let myCreatedDateandTime=new Date(2024,4,9,15,5)
console.log(myCreatedDateandTime.toDateString());
console.log(myCreatedDateandTime.toLocaleString());

let oneMoreDate = new Date("2000-08-22");
console.log(oneMoreDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);//shows in milisecond..to having it in seconds we need to divide by 10...

console.log(Math.floor(Date.now()/1000)); //asked in interview

let freshDate=new Date();
console.log(freshDate.getMonth()+1);
console.log(freshDate.getDay());
console.log(myCreatedDate.getHours());

freshDate.toLocaleString('default',{
    weekday:"long",
})