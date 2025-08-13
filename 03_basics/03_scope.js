let z=1000;// This is global scope

if(true){ // this is block scope
    let a=200;
    let z = 10;
    const b=300;
    var c=400;

    console.log("internal :",z);
    
}
// console.log(a);//error
// console.log(b);//error
// console.log(c); //coz of var op: 400
console.log("External",z);

