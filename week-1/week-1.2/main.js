/* 1st set - basic questions */

// console.log("hello world");
// console.log(a)

// Write the program to greet a person given their first and last name
function greetPerson(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}
// greetPerson('Yunus', 'Shaikh')

// Write a program that greets a person based on their gender. (If else)
function greetPersonBasedOnGenger(gender, name) {
  if (gender === "male" || gender === "Male") {
    console.log(`He is him and his name is ${name}`);
  } else {
    console.log(`She is her and her name is ${name}`);
  }
}
// greetPersonBasedOnGenger('male', "Yunus")

// Write a program that counts from 0 - 1000 and prints (for loop)
function forLoop1000times() {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}
// forLoop1000times()

/* 2nd set - Arrays and Objects */

// Write a program that prints all the even numbers in an array
const evenArray = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 32, 4, 32, 45, 67, 44, 23, 545, 232, 353, 676,
  584, 772,
];

// for (let i = 0; i < evenArray.length; i++) {
//   if (evenArray[i] % 2 === 0) {
//     console.log(evenArray[i]);
//   }
// }

// Write a program to print the biggest number in an arrya
let biggest = evenArray[0];
for (let i = 0; i < evenArray.length; i++) {
  if (biggest < evenArray[i]) {
    biggest = evenArray[i];
  }
}
// console.log(biggest)

// 3. Write a program that prints all the male people’s first name given a complex object
const people = [
  {
    firstName: "Mike",
    lastName: "Tyson",
    gender: "male",
  },
  {
    firstName: "Maya",
    lastName: "Tyson",
    gender: "female",
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    gender: "male",
  },
];

// for(let i=0; i<people.length; i++){
//   if(people[i].gender === 'male'){
//     console.log(people[i].firstName)
//   }
// }

// 4. Write a program that reverses all the elements of an array
let reversedArray = [];
for (let i = evenArray.length - 1; i >= 0; i--) {
  reversedArray.push(evenArray[i]);
}
// console.log(reversedArray)

/* bounty problem */
// let sum = 0
// for(let i =0; i < 10000000000000000; i++){
//     sum = sum + i
// }
// console.log(sum)

/* 3rd set - Functions */

// 1. Write a function that finds the sum of two numbers
function sum(a, b) {
  return a + b;
}
// console.log(sum(8, 10))

/* Assignments */

// 1. Create a counter in Javascript (counts down from 30 to 0)

function counter(count) {
  if (count === 0 || count < 0) return;

  setTimeout(() => {
    console.log(count);
    counter(count - 1);
  }, 1000);
}

// counter(30);


// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

const timeJustNow = Date.now()

setTimeout(() => {
  const timeInsideSetTimeout = Date.now()
  const difference = timeJustNow - timeInsideSetTimeout
  console.log(`The time difference is ${difference} millisecond`)
}, 1000)


// 3. Create a terminal clock (HH:MM:SS)

function terminalClock(){
  setTimeout(() => {
    const timeNow = new Date()
    console.log(timeNow.getHours() + ':' + timeNow.getMinutes() + ':' + timeNow.getSeconds())
    terminalClock()
  }, 1000);
}

// terminalClock()

function Clock(){
  setInterval(() => {
    console.log(new Date().toLocaleTimeString())
  }, 1000)

}
// Clock()
