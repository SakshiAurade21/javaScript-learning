
let todayDate=new Date() //current date

console.log(todayDate);
console.log(typeof todayDate);//object


//*********Convert to strings ********/

console.log(todayDate.toDateString());// only date
console.log(todayDate.toISOString());// ISO format (great for APIs)
console.log(todayDate.toString());// full date & time string
console.log(todayDate.toTimeString());// only time part

//customized date
const customDate = new Date(2026, 3, 22); // year, month (0-based), day → July 24, 2025
console.log("2026 birthdate :",customDate);

// // console.log(myCreatedDate.toLocaleString());

//******************** time ******************** */

let myTimeStamp = Date.now() //time in milisec
console.log(myTimeStamp);

console.log("custom date get time:",customDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log("month :",newDate.getMonth()); 
console.log(newDate.getMonth()+1);// corrcet month count
console.log("date :",newDate.getDate());
console.log("week day :",newDate.getDay());


console.log(`hey this is sakshi ! today's date is ${todayDate.toDateString()} and time is : ${todayDate.toLocaleTimeString()}`);


// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
