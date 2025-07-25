//An array is a special variable that can hold multiple values in a single variable 

let myArray=[0,1,2,3,4,5];

let ma=new Array(10,20,30,40,50);

console.log(myArray);
console.log(typeof myArray);//obj

// Accessing Elements
console.log("index:",myArray[4]); //use 0-based indexing.

//Common Array Methods
console.log(myArray.push(10)); // add element at the end of array
console.log("push methos:",myArray);

console.log(myArray.pop()); // remove element from the end of array
console.log("after pull :",myArray);

console.log(myArray.unshift(10)); // add element at the strat of array
console.log("unshift :",myArray);

console.log(myArray.shift()); // remove element from the end of array
console.log("Shift :",myArray);

console.log("includes :",myArray.includes(6)); // Check if value exists return true or false
console.log("index of :",myArray.indexOf(4)); // Find index of value
console.log("length",myArray.length); // length of array

let joinExample = myArray.join();// convert array into string
console.log("join array :",joinExample);
console.log("type of join array :",typeof joinExample);//string


// slice & splice 

let colors = ["red", "green", "blue", "yellow"];


let sliceExample = colors.slice(1,3);// from index 1 to 2 (not 3)
console.log("after slicing :",sliceExample);// ["green", "blue"]
console.log("after slicing original array :",colors);// ["red", "green", "blue", "yellow"] original (unchanged)

let spliceExample= colors.splice(1,3); //consider 3 also
console.log("after splice :",spliceExample);//"green", "blue", "yellow"
console.log("after splice original array :",colors);//[ 'red' ] original array changed