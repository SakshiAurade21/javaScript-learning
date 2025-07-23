// Loose and relational comparisons
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);



// console.log("2" > 1);  // true → "2" is converted to number → 2 > 1
// console.log("02" > 1); // true → "02" is converted to number → 2 > 1

// Null comparisons
console.log(null > 0);     // false → null is converted to 0 → 0 > 0 → false
console.log(null == 0);    // false → null is only loosely equal to undefined, not 0
console.log(null >= 0);    // true  → null is converted to 0 → 0 >= 0 → true

// Undefined comparisons
console.log(undefined == 0);  // false → undefined is only loosely equal to null, not 0
console.log(undefined > 0);   // false → undefined becomes NaN → NaN > 0 → false
console.log(undefined < 0);   // false → undefined becomes NaN → NaN < 0 → false

// Strict equality
console.log("2" === 2);    // false → different types (string vs number) → no type conversion with ===

//************ Conclusion ***************/

/* In JavaScript, when using equality operators like `==` or `===`, 
 no type conversion happens for `null` and `undefined`—
 they are only loosely equal to each other (`null == undefined` is true),
 but not to `0` or any other value. 

 However, when using relational operators like `<`, `>`, `<=`, or `>=`, 
 JavaScript **converts non-numeric values like `null` or strings to numbers** before comparing. 
 For example, `null >= 0` becomes `0 >= 0` (true), but `null == 0` is false because `null` is not considered equal to `0`. 
 
 On the other hand, `undefined` becomes `NaN` in such comparisons, and any comparison with `NaN` always results in false. 
 So, always be cautious with comparisons involving `null` and `undefined`.
 */