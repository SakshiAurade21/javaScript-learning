
// function calculateCartPrice(num) //ot:200
// function calculateCartPrice(val1,val2,...num) //ot:700,200

function calculateCartPrice(...num)// used rest operator which is same as spread
{ 
    return num
}
console.log(calculateCartPrice(200,600,700,200));

//function for Objcet

const user={
    username:"sakshi",
    priceOfCart:200
}

function exampleOfObject(anyobject){
    console.log(`my name is ${anyobject.username} and price of my cart is ${anyobject.priceOfCart}`);
}
// exampleOfObject(user)//my name is sakshi and price of my cart is 200

exampleOfObject({
    username:"sunny",
    priceOfCart:300
})//my name is sunny and price of my cart is 300

// Funtion using array

const myArray=[200,300,400,500,600]

function exampleOfArray(anyobject){
    return anyobject[0]
}

// console.log(exampleOfArray(myArray));//200
console.log(exampleOfArray([7800,4500,3400]));//7800

