

// This is a javascript comment. this is not executable code

// In ES6 Javascript, there are 2 types of variables.
// Use const when your value will stay the same
// Use let when your value may change
const myName = 'Torry'
let currentAge = 19

// In ES6 Javascript, functions are consts
const gettingOlder = (currentAge, years) => {
  return currentAge + years
}

// now we execute
const newAge = gettingOlder(currentAge, 1)

console.log(`The new age is ${newAge}`)
