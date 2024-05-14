const marvel_Heroes=["ironman","thor","captain America","Loki","Hulk","Black widow","Dr Strange"]
const dc_heroes=["Superman","batman","flash","wonder woman","Aquaman","Green Lantern"]

// marvel_Heroes.push(dc_heroes)
// console.log(marvel_Heroes);//takes 2nd array as a datatype itself
console.log(marvel_Heroes.concat(dc_heroes));

 //const allHeroes=marvel_Heroes.concat(dc_heroes) //another way of printing concatenated array
// console.log(allHeroes);

//spread...just like a glass (only 3 dots ...)

const all_new_heroes=[...marvel_Heroes,...dc_heroes]
console.log(all_new_heroes);

//flat= returns a new array with all sub-arrays concatenated in a single array

const a=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const b=a.flat(Infinity)
console.log(b);

console.log(Array.isArray("Shahnawaz"));//returns false as its not an array
console.log(Array.from("Shahnawaz"));//returns the str as an array
console.log(Array.from({name:"Shahnawaz"}));//interesting case for interview...returns empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score1,score3));//ofc we can repeat the value