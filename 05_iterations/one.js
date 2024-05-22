//for
// for (let i=0;i<=10;i++){
//     const element=i;
//     if (element==5) {
//         console.log("5 is best");
//     }

// }
// console.log(i);cant be accessed as not defined

// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let j = 01; j <10; j++) {
//        // console.log(`Inner loop ${j} and outerloop ${i}`);
//         console.log(i+'*'+j+'='+(i*j));
//     }
    
// }
let myArray=['flash','batman','superman']
for (let i = 0; i < myArray.length; i++) {//if we run the loop more than the size of array then for the remaining iteration it will print undefined
    const element = myArray[i];
  //  console.log(element);
}
//break and continue
for (let k = 0; k < 20; k++) {
    if (k==5) {
        console.log(`${k} has been detected`);
        break
    }
    console.log(`Value of k is ${k}`);
    
}