const x: number = +"1";
console.log(x);

function greet(firstName: string, lastName: string) {
  console.log(`Hello ${firstName} ${lastName}`);
}

greet("Yunus", "Shaikh");

function add(a: number, b: number) {
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

function runFunc(fn: () => void) {
  setTimeout(fn, 1000);
}

runFunc(function () {
  console.log("something");
});


interface User {
    firstname: string
    lastname: string
    age: number
    email?: string
}

function isLegal(user: User){
    if(user.age > 18){
        return true
    }
    else{
        return false
    }
}


// type KeyInput = "up" | "down" | "left" | "right"

// const doSomething = (keyPressed: KeyInput) => {
//   //do something
// }

// doSomething("down")
// doSomething("right")
// doSomething("something")


enum Directions {
  Up,
  Down,
  Left,
  Right
}

const doSomething = (keyPressed: Directions) => {
  //do something
}

doSomething(Directions.Right)
doSomething(Directions.Right)
console.log(Directions.Up)
console.log(Directions.Down)
console.log(Directions.Left)
console.log(Directions.Right)




//generics

function indentify_1(arg: number | string){
  return arg
} 

const value = indentify_1(1)
// console.log(value.toUpperCase())  => gives error
//problem:  the problem is that value variable doesn't know what exactly is the type of argument, it cannot decide between string or number so we cannot use toUpperCase on value it gives error, The type of value is number | string, which is a problem. To fix this we have generics. 



function identify <T>(arg: T) {
  return arg
}

const val1 = identify<string>("something")

const val2 = identify<number>(123)



function getFirstElement<T>(arg: T[]){
  return arg[0]
}

const ele = getFirstElement<string>(["yunus", "Shaikh"])
const numEle = getFirstElement<number>([1,2,3,4,5])
const numberElements = getFirstElement([1,2,3,4,5,])           //without explicitly giving generic type
const stringElements = getFirstElement(["yunus", "shaikh"])
console.log(ele.toUpperCase())


