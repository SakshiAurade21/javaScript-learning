/* What is forEach?
    ~ forEach is a method available on arrays (not a loop keyword like for...of or for...in).
    ~ It lets you execute a function once for each element in the array.
*/
// array.forEach(function(element, index, array) {
//    // do something
// });

/*
element → current value of the array
index → position of the element (0,1,2…)
array → the whole array itself */

//simple

const myArray=["sakshi","ketki","pournima","aai","sunny"]

console.log("simple elements example : ");

myArray.forEach(function(element)
{
    console.log(element);
    
})
console.log("============================================");

//index example

const arr =[1,2,3,4,5,6,7]

arr.forEach(function(element ,index)
{
    console.log(`value is ${element} at index of :${index}`);
    
})
console.log("============================================");
//🔹 Arrow Function Short Version

const myarr=["apple","mango","banana"]

myarr.forEach((fruit,index)=>{
    console.log("fruit name :",index,fruit);
    
})
console.log("============================================");

//access array with multiple object 

const myObj1=[
    {
        name:"sakshi",
        age:22
    },
    {
        name:"ketki",
        age:23
    },
    {
        name:"pournima",
        age:23
    }
]
myObj1.forEach((o,index)=>
{
    console.log(`index of elements ${index} and value is :${o.name}`);

})