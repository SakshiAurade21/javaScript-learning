
// Stack (Primitive Data Types like string, number, boolean)

// When using primitive types, the value is copied into a new variable
let fullName = "sakshi";
let Fname = fullName;  // A copy of "sakshi" is stored in Fname (not a reference)
Fname = "Sakshi Aurade";  // Only Fname is updated, fullName remains unchanged

console.log(fullName); // Output: "sakshi"
console.log(Fname);    // Output: "Sakshi Aurade"

// This proves that primitives are stored in Stack and copied by value
// Each variable gets its own separate space in memory


//********************************************************

// Heap (Non-Primitive Data Types like objects, arrays, functions)

// When assigning objects, the reference (memory address) is copied — not the actual value
let myobj = {
    userName: "sakshi",
    mail: "sakshiaurade21@gmail.com"
};

let myobj2 = myobj; // myobj2 now points to the same object in Heap memory

// Modifying the object using myobj2 will also reflect in myobj
myobj2.mail = "auradesakshi21@gmail.com";

console.log("myobj", myobj.mail);   // Output: "auradesakshi21@gmail.com"
console.log("myobj2", myobj.mail);  // Output: "auradesakshi21@gmail.com"

// This shows that non-primitive values are stored in Heap and shared by reference
// Both variables point to the same memory location
