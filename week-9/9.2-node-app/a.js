"use strict";
const x = +"1";
console.log(x);
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
greet("Yunus", "Shaikh");
function add(a, b) {
    // console.log(a + b)
    return a + b;
}
const addition = add(2343, 3546);
console.log(addition);
// function isLegal(age: number) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
function runFunc(fn) {
    setTimeout(fn, 1000);
}
runFunc(function () {
    console.log("something");
});
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
