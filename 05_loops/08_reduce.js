/* 
 What is reduce()?
   ~ reduce() is used when you want to take an array of values and reduce it down to a single value.
   ~ That single value could be a sum, product, average, object, or even another array.

Syntax:

array.reduce((accumulator, currentValue) => {
   return something;
}, initialValue);

    accumulator → stores the result (starts from initialValue)
    currentValue → each element of the array
    initialValue → starting point for the accumulator
*/

let myNumber=[1,2,3,4,5,6,7,8,9,10]//using function

let reduceExample=myNumber.reduce(function(acc,currval){

    console.log(`acc : ${acc} and current value is :${currval}`);
    return acc+currval
},0)

console.log(reduceExample);

console.log("=====================================");


let shoppingCart=[
    {
        productName:"book",
        price:199
    },
    {
        productName:"flower",
        price:400
    },
    {
        productName:"t-shirt",
        price:900
    },
    {
        productName:"pen",
        price:19
    }
]

//with arrow funtion and how access obj 
let shopCart=shoppingCart.reduce((acc,totalprice)=>acc+totalprice.price,0)
console.log(shopCart);

