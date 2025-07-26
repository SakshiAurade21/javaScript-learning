//declared object as constructors
const tinderUser = new Object();

// Adding properties to the object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

// Nested object inside an object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sakshi",
            lastname: "Aurade"
        }
    }
}

// Accessing nested values
console.log(regularUser.fullname.userfullname.firstname);

// Merging multiple objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Using spread operator to merge obj1 and obj2
const obj3 = {...obj1, ...obj2}
console.log(obj3); // Output: {1: "a", 2: "b", 3: "a", 4: "b"}

// Using assign opeartor to merge 
const obj5=Object.assign({},obj1,obj2)
console.log("using assign operator : ",obj5)

// Array of objects - useful in database-like structures
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "x@gmail.com"
    },
    {
        id: 3,
        email: "y@gmail.com"
    },
]

// Accessing values from array of objects
users[1].email  // Accesses the email of the second user

//Object methods
console.log(Object.keys(tinderUser));   // Returns array of property names
console.log(Object.values(tinderUser)); // Returns array of property values
console.log(Object.entries(tinderUser)); // Returns array of key-value pairs

// Checks if a property exists in object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
