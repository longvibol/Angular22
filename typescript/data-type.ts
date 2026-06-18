var oldWay = "don't use var";
var count = 10;

// let

let reassignable = "Can change this";
reassignable = "Change value"; // this is allowed

// const

const chanstant = "Cannot change this";
// chanstant = "Error";

// number : no fload or big data 

const productPrince: number = 200.99;
const downloadCoount: number = 10000;
const rating: number = 4.5;
const temperature: number = -10;

// String
const apiEndpoint: string = "http://api.examp.com/";
const authToken: string = 'Bearer xyz123';
const welcomeMessage: string = `Welcome to our platform`;
const companyName: string = "TechCorp";


// boolean

const isAuthenticated: boolean = true;
const hasSubscription: boolean =false;

// let

let res: any ={"name" :"Harsh"};
// console.log(res.toUpperCase()); // this will crashed at runtime

// unknow 

const a: unknown = {name : "vibol", "age" : 30 }; // this is object type

// console.log(a.name);  // this is error becasue it is object type 

if( typeof a === 'object' && a != null && "name" in a){
    console.log(a.name);
}