// Problem with regular arrays
let locationArray: number[] = [28.09, 77.20];
locationArray.push(100); // Can add more elements - no restriction 

// Creating a tuple
let coordinates:[number, number] = [20.99, 30.99];

// Trying to create with one value - Error
// let coords1: [number, number] = [40.99]; //Error: must have 2 elements 

// Tuple with difference types
let httpResponse: [number, string] = [200,"Success"];
// let response2: [number, string] = [200, 404]; // Error: second must be string 

// Accessing tuple elements 
let statusCode: number = httpResponse[0]; // Gets 200
let message: string = httpResponse[1]; // Gets "Success"

// Destructuring tuples
let [code, msg] =  httpResponse; // code is 200, msg is "Success"