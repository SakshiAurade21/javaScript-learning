// Tasks for While Loop

// Print numbers from 1 to 10 using a while loop.

let num=0;

while (num<=9) {
    num++;
    console.log("number is :",num); 
}



// Sum of first 10 natural numbers using a while loop.
// 👉 Output: 55
console.log("=====================================");

let number=0;
let sum=0;

while (number<=10) {
    sum+=number;
    number++;
}
console.log("total sum is :",sum);//55



// Print even numbers from 2 to 20 using a while loop.
// 👉 Output: 2 4 6 8 10 12 14 16 18 20
console.log("=====================================");

let evenNum=0;

let index=0;

while (index<=20) {
    if (index % 2 == 0) {
        evenNum = index

        console.log("Even number is :",evenNum);
    }
    index++;
}

// while(index<=20){
//     index=index+2;
//     console.log(index); 
// }

// Reverse a string (e.g., "hello" → "olleh") using a while loop.
console.log("=====================================");

let str="hello";
let i=str.length;

while(i>0){
    i--;
    console.log(str[i]);
}

// Find factorial of a number (e.g., 5! = 120) using a while loop.
console.log("=====================================");

let index2=1;
let result=1;

while (index2<=5) {
    result=result*index2
    index2++;
}
console.log(result);
