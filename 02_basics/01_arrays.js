//array
const myArr=[0,1,2,3,4,5] //arrays in js re-sizable and can contain multiple type of variable
console.log(myArr[4]);
//array-copy operations create shallow copies..shallow copies share the same references(point to the same underlying values)
//deep-copies do not share the same references
const myHeroes=["ironman","thor","captain America","Loki","Hulk","Black widow","Dr Strange"]
console.log(myHeroes[4]);
// another way of declaring arrays
const arr2=new Array(10,34,54,23,76,97)
console.log(arr2[4]);
//===============Array Methods==================
// arr2.push(8);
// console.log(arr2);
// arr2.push(100);
// console.log(arr2);
// arr2.pop();
// console.log(arr2);



// arr2.unshift(9);//adds value to the start of an array...used as push just from the start
// console.log(arr2);
// arr2.shift();//used as pop..removes 1st value
// console.log(arr2);

// console.log(arr2.includes(837));//returns boolean values

 const newArr =arr2.join()
// console.log(typeof newArr);// join binds the array and converts it to a string

//slice and splice
console.log("A",newArr);
const myn1=myArr.slice(1,3)//returns the value of a section of an array[1,2]
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)//returns the value of a section of an array and also returns 3rd value unlike slice[1,2,3]
console.log(myn2);
console.log("c",myArr);// very important for interviews..the original array is manipulated..splices cuts the part from the og array unlike slice which copies

