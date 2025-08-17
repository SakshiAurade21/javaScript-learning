const emailId = 0// its falsy value so else part will run
if (emailId) {
    console.log("got email id");
}
else {
    console.log("not email");

}

// Truthy and Falsy Values in JavaScript
// ==============================

// Falsy Values (Only 6 in JavaScript)
// These values are treated as false in conditional checks
// 1. false
// 2. 0 (zero)
// 3. -0 (negative zero)
// 4. "" (empty string)
// 5. null
// 6. undefined
// 7. NaN



// Truthy Values
// Everything else in JS is truthy 

// 1, -1, 3.14    any number except 0
// "hello"        any non-empty string
// []             empty array is truthy
// {}             empty object is truthy
// function(){}   functions


// ==============================
// How to check if an Array is EMPTY or not
// ==============================

const arr1 = [];

if (arr1.length === 1) {
    console.log("array is not empty");
}
else {
    console.log("array is empty");

}

// ==============================
// How to check if an Object is EMPTY or not
// ==============================

const obj1 = {};

if (Object.keys(obj1).length === 1) {
    console.log("obj is not empty");
} else {

} console.log("obj is empty"); 
