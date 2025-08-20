/* for...in Loop in JavaScript
for...in is used to iterate over the keys (property names / indexes) of an object or an array. */

// for (const key in object) {
// }

//Here key will be the property name(keys) (for object) or index (for array).


// for...in does NOT work on Map
// works on object and arrays only !


//====================== Object =============================
console.log("object example :");
const myObj={
    "name":"sakshi",
    "age":22,
    "emilId":"auradesakshi21@gmail.com"
}

for (const key in myObj) {
    console.log(`key: ${key} -> values:${myObj[key]}`);
}

console.log("==========================================");

//====================== Array =============================

console.log("Array example :");

const myArray=["sakshi","ketki","pournima"];

for (const key in myArray) {
   console.log(`${key}->${myArray[key]}`);
   
}

/*
In short:
    ~ Use for...in → when you want keys (like object properties or array indexes).
    ~ Use for...of → when you want values (like array items, string characters).
*/