let fullName ="Sakshi";
let repoCount=99;

// this is backticks 
console.log(`hi, my name is ${fullName} and my repo count is : ${repoCount}`);

// new style of reprsenting strings

let emailId=new String("auradesakshi21@gmail.com");

//get access of each char

console.log(emailId[4]);

// introduce different prototype (function)

console.log(emailId.__proto__);

console.log(emailId.length);
console.log(emailId.toUpperCase());
console.log(emailId.charAt(14));
console.log(emailId.indexOf('2'));

const substringExample=emailId.substring(0,12);
console.log(substringExample);

const sliceExample=emailId.slice(12,-2);
console.log(sliceExample);

//trim 

const trimExample="   Sakshi   ";
console.log(trimExample);
console.log(trimExample.trim());

const myUrl="sakshi-Aurade%21.www.com"

console.log(myUrl.replace('%21','-04'));

console.log(myUrl.includes("great"));

console.log(myUrl.split('-'));









