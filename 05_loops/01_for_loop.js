// for (let i = 0; i <= 10; i++) {
//     console.log(i);    
// }

// For Loop Practice Tasks
//===============================================

// Write a for loop that prints numbers from 1 to 10.

for (let i = 0; i <= 10; i++) {
    console.log("number :", i);
}


// Use a for loop to calculate the sum of numbers from 1 to 100.

console.log("============================================");
let sum = 0;

for (let index = 0; index <= 100; index++) {
    sum = sum + index;
}
console.log("total sum is :", sum);


// Take a number (e.g., 5) and print its multiplication table (from 1 to 10).

console.log("============================================");

for (let index = 1; index <= 10; index++) {

    console.log("table of:", index);

    for (let j = 1; j <= 10; j++) {
        console.log(`${index} * ${j} = ${index * j}`);
    }
    console.log("============================================");
}


// Given a string "javascript", use a for loop to reverse it and print "tpircsavaj".

let str = "javascript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {

    reversed += str[i];
}
console.log("reversed string :", reversed);



// Given an array [10, 45, 2, 98, 33], use a for loop to find the largest number.
console.log("============================================");

let myArray = [10, 45, 2, 98, 33];

let largestArray = myArray[0];

for (let i = 1; i < myArray.length; i++) {
    if (largestArray < myArray[i]) {
        largestArray = myArray[i]
    }
}
console.log("largest number from array :",largestArray);

