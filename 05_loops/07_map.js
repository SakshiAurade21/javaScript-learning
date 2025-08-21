/*
🔹 map() in JavaScript
    ~ map() is used when you want to transform each element of an array and create a new array from it.
    ~ Unlike forEach, which just runs a loop, map() returns a new array.

   🔹 filter() → Returns only those elements that pass a condition.
   🔹 map() → Transforms every element and returns a new array.

*/

let myNumber=[1,2,3,4,5,6,7,8,9,10]

let mapExample=myNumber.map((num)=>{
    return num*10;
})

console.log("map example:",mapExample);

/*
🔹 Chaining Concept

You can use multiple array methods together in one line → this is called chaining.
Example: filter + map + forEach

*/

let myNumber1=[1,2,3,4,5,6,7,8,9,10]

let mapExample1=myNumber1.map((num)=>{return num*10;})
.map((num)=> num+0.5)
.filter((num)=> num>=50)

console.log("chaining example",mapExample1);