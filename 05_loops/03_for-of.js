/* for...of loop is used to iterate over iterable objects (things that can be looped element by element).
 It gives you the value directly, not the index 
 _______________________________________________________________________________

 Gives Values, Not Index:
    Unlike for or for...in, it directly gives you the values of the iterable.
 _______________________________________________________________________________

Simpler than Normal For Loop:
    No need to manage counters (i++) or array length.

Example:
 
 */

 const number = [1,2,3,4,5,6,7,8,9]

 for (const num of number) {
    console.log(num);
    
 }
//====================== Maps =============================

const myMap = new Map(
    [
        ["name", "sakshi"],
        ["age", 22]
    ]
);
for (const [Key,value] of myMap) {
    console.log([Key,value]);
    
}

//====================== String =============================

const str="sakshi";

for (const ch of str) {
    console.log("each character",ch);
} //to reverse, for...of  can’t go backwards, because it only knows how to move forward using the iterator.

 /*     
 
 Why not Objects?

1) Objects don’t have a default order of properties.
2) for...of requires Symbol.iterator method → objects don’t have it.
3) To loop objects, we use:
       i) for...in → keys
      ii) Object.keys(obj), Object.values(obj), Object.entries(obj) + for...of */