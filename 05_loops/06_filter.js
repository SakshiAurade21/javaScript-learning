/*
What is filter()?

filter() is a method used with arrays.

    ~ It goes through each element of the array and checks a condition.
    ~ If the condition is true, it keeps that element in a new array.
    ~ If the condition is false, it removes (ignores) that element.

Important: filter() always returns a new array (does not change the original one).
*/


//filter even number

const myNumber=[1,2,3,4,5,6,7,8,9,10]

const filterEven=myNumber.filter((num)=>{
    return num%2==0;
})

console.log(filterEven);

let books = [
  { title: "The Silent Patient", author: "Alex Michaelides", year: 2019, genre: "Thriller" },
  { title: "Variety of Dreams", author: "Emma Collins", year: 2021, genre: "Fiction" },
  { title: "Whispers in the Dark", author: "John Carter", year: 2018, genre: "Mystery" },
  { title: "Love Beyond Time", author: "Sophia White", year: 2020, genre: "Romance" },
  { title: "The Last Kingdom", author: "Bernard Cornwell", year: 2004, genre: "Historical Fiction" },
  { title: "Shadows of Truth", author: "David Johnson", year: 2022, genre: "Crime" },
  { title: "Dreamcatcher", author: "Stephen King", year: 2001, genre: "Horror" },
  { title: "The Lost City", author: "Lara Scott", year: 2017, genre: "Adventure" },
  { title: "Echoes of Silence", author: "Rachel Adams", year: 2015, genre: "Drama" },
  { title: "Journey to the Stars", author: "Michael Brown", year: 2019, genre: "Sci-Fi" }
];

let useBooks = books.filter((bk)=>
{
    return bk.year>=2019 && bk.author==="Alex Michaelides";
}
)
console.log(useBooks);

/*
🔹 forEach vs filter

=> forEach

       ~ Loops through every item in an array.
       ~ Runs some code for each item.
       ~ Does not return a new array.
       ~ You usually use it when you just want to do something (like printing, updating, or storing somewhere else).

But here, no new array is created. Only printing.

=> filter

       ~ Also loops through every item.
       ~ But it returns a new array that contains only those elements which pass a condition (true/false).
       ~ Use when you want to extract specific items from an array.
*/