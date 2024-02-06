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
// type KeyInput = "up" | "down" | "left" | "right"
// const doSomething = (keyPressed: KeyInput) => {
//   //do something
// }
// doSomething("down")
// doSomething("right")
// doSomething("something")
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
const doSomething = (keyPressed) => {
    //do something
};
doSomething(Directions.Right);
doSomething(Directions.Right);
console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions.Left);
console.log(Directions.Right);
