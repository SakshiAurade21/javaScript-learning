
// \Nullish Coalescing Operator (??) in JavaScript
// -------------------------------------------------
// The operator ?? is used to provide a default value 
// when the left-hand side is null or undefined.
// 
// Syntax: value1 ?? value2
// It returns:
//   - value1, if value1 is NOT null or undefined
//   - otherwise, it returns value2


let value1;
// value1 = 5 ?? 10; // 5(first value )

// value1 = null ?? 10; // 10

// value1 = undefined ?? 20; // 20

value1 = null ?? 10 ?? 30// 10 (first value )



console.log(value1);
