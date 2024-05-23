const coding =['js','rb','py','java','cpp']
// coding.forEach( function (item) { //callback functions dosent have a name
//    console.log(item);
// } )

// coding.forEach( (item)=>{
//     console.log(item);
// })//callback using arrow functions


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//just giving refernce..not executing

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )