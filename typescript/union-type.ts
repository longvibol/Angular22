//Problem 

let response1: number =200; // Can't store "success"
let response2: string = "success" // can not store 200 status code 

// Solution : union types

let response: string | number;
response = 200; // valid
console.log(response)

response = "success" // valid
console.log(response)

// Common use case: nullable values 
let userInput: string | null;
userInput = "John"; // valid 
console.log(userInput);

userInput = null;
console.log(userInput); // vaid 