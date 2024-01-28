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