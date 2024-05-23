//normal for loop
for (let index = 0; index < 10; index++) {
    //console.log(index);;
    
}
//for of loop
const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
//maps=are like arrays but only accepts unique value and it also maintains the order!

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United states of America")
map.set('UAE',"United Arab Emirates")
map.set('IN',"INDIA")
//console.log(map);

for (const [key, value] of map) {
    console.log(key,":-",value);
}