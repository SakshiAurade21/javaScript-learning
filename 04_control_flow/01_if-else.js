// Simple if statement

age = 18
if (age >= 18) {
    console.log("you are adult");

}

// if-else statement

age = 16
if (age >= 18) {
    console.log("you are adult");
}
else {
    console.log("your are minor");

}

// if-else ladder (else-if) (if-elif-else )

const marks = 70;
if (marks >= 90 & marks <= 100) {
    console.log("Grade :A");
} else if (marks >= 80 & marks <= 89) {
    console.log("Grade :B");
}
else if (marks >= 70 & marks <= 79) {
    console.log("Grade :C");
}
else {
    console.log("fail");

}

// nested if

age = 20;
 const citizen =true;

if (age >= 18){
    if(citizen){
        console.log("You can vote")
    }
    else { console.log("You must be a citizen to vote") }

}
else { print("You cannot vote") }

// Short-hand (Single-line if)

if (age=16) console.log("your are minor dude");
   
// 6. Ternary Operator (One-line if-else)
let score = 40;
let result = (score >= 50) ? "Pass" : "Fail";
console.log("Ternary Operator: " + result);