
const user={
    name:"sakshi",
    emailId:"auradesakshi21@gmail.com",
    welcomeMessage : function(){
        console.log(`${this.name} , nice to meet you`);
        console.log(this);
        
    }
}
user.welcomeMessage()

user.name="sunny";
user.welcomeMessage()


console.log(this); // empty node

console.log("**************************************************");


// 1️⃣ THIS in a method (object function)
const person = {
  name: "Sakshi",
  sayName: function() {
    console.log(this.name); // 'this' points to the person object
  }
};

person.sayName(); // Vanshika ✅


// 2️⃣ THIS in a regular function
function showThis() {
  console.log(this); // 'this' points to the global object (window in browser)
}

showThis(); // In strict mode: undefined | Otherwise: Window object

console.log("**************************************************");

// 1️⃣ Method 1: Basic Arrow Function
// No parameters, just runs some code


const sayHello = () => {
  console.log("Hello! 👋");
};
sayHello(); // Output: Hello! 👋


// 2️⃣ Method 2: Arrow Function with ONE Parameter (no brackets needed)
// If there's only 1 parameter, we can skip the parentheses
const greet = name => {
  console.log(`Hello, ${name}! 🌟`);
};
greet("Sakshi"); // Output: Hello, Sakshi! 🌟


// 3️⃣ Method 3: Implicit Return (Short-hand return without {} or 'return')
// If the function body is only 1 expression, we can skip curly braces
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8


// 4️⃣ Method 4: Returning an Object (MUST wrap object in parentheses)
// Without parentheses, JS thinks {} is a function block
const getUser = () => ({ name: "Sakshi", role: "Developer" });
console.log(getUser()); // Output: { name: 'Sakshi', role: 'Developer' }



// practice


const practice1=()=>{
    console.log("Welcome to JavaScript! 🚀");
}
practice1()


const practice2= num1=>{
    return num1*2;
}
console.log("double the number",practice2(7));


const practice3=(a,b)=>a-b;
console.log("subtraction",practice3(10,3));

const practice4=()=>({ name: "Aarav", age: 25 })
console.log(practice4().name)//aarav