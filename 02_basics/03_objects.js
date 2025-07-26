//singleton object can be created using Object.create 
// (not used here but mentioned)

// When an object is created using a constructor, it forms a singleton object, meaning it's a unique instance 
// However, when objects are declared using literals, they do not form singletons, and multiple instances can be created .

// Defining an object using object literal syntax

let symbolExample=Symbol("keyNumber1");//A common interview task involves 
// taking a Symbol and adding it as a key within an object, then printing it

const userDetails={
    name:"sakshi",
    email:"auradesakshi@gmail.com",
    age:22,
    Location:"pune",
    isFollow:true,
    dateVisit:["monday","saturday","sunday"],
    [symbolExample]:"key1"// use square brackets to acces key in obj
}

console.log(userDetails);

//  Accessing object properties using dot and bracket notation
console.log(userDetails.email)         // Dot notation
console.log(userDetails["email"])      // Bracket notation
console.log(userDetails[symbolExample]) // using square bracket we can Access Symbol

// Updating a property value
userDetails.email="sakshiaurade21@gmail.com";

// Freezing the object to prevent further changes 

// Object.freeze(userDetails);

// Trying to update after freezing will not work if freeze is active
userDetails.email="abc@gamil.com";
console.log(userDetails);

// // Adding a method to the object

userDetails.greet=function(){
    console.log("hey");
}
console.log(userDetails.greet());//it was not working coz of freeze method so make that as freeze


// Adding another method using `this` to access properties

userDetails.greetings=function(){
    console.log(`hey my name is  ${this.name} and this is my email id ${this.email}`);  
}
console.log(userDetails.greetings())
