// for in is used for object
const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    py:'python'
}
for (const key in myObject) {
    // console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
//using forin for Array
const programming=['js','rb','py','java','cpp']
for (const key in programming) {
    //console.log(key);//prints keys:0 1 2 3 4
    //console.log(programming[key]); //prints value
}
//using for map
// const map=new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United states of America")
// map.set('UAE',"United Arab Emirates")
// map.set('IN',"INDIA")
// for (const key in map) {
//    console.log(key);//doesnt shows error but prints nothing because maps are not iteratable
// }



//array= for of
//objects = for in