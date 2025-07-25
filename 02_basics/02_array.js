const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// with push method 
// (create nested array inside marvel_heros instead of merging the two arrays.)
// marvel_heros.push(dc_heros)
// console.log("Using push method :",marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


//Concatination (always create new array )

let ConcatExample=marvel_heros.concat(dc_heros);
console.log("Concatination example :",ConcatExample);// can't concatinate multiple array at once


//Spread Operator [...] to Merge Arrays
//What it does: Merges multiple arrays into a single flat array
// Why use it? It's a cleaner and more modern way than concat()

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log("Spread Oprator :",all_new_heros);

// Flat-Flattens nested arrays into a single-level array

const flatArrayExample = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

console.log("before flat operation:",flatArrayExample);

const singleLevelArray=flatArrayExample.flat(Infinity);//mention depth in ()
console.log("After Flat opration :",singleLevelArray);

/********************************* */
// isArray -check if it is array or not ?
console.log("Array ? :",Array.isArray([7,8,9,30]));//true
console.log("Array ? :",Array.isArray("sakshi"));// false coz input is string

/************************************* */

//from- Creates an array from an iterable or array-like object
console.log("from operator:",Array.from("Sakshi"));//[ 'S', 'a', 'k', 's', 'h', 'i' ]

// console.log(Array.from({name: "hitesh"})) // interesting


//of-Creates an array from a list of arguments

let score1 = 100
let score2 = 200
let score3 = 300

console.log("of operator example ",Array.of(score1, score2, score3));