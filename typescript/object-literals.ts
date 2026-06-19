// Problem: Separate vairable for related data
let userName: string = "John Doe";
let userAge: number = 30;
let userEmail: string = "john@example.com";
let userIsActive: boolean = true;
// Imagine managing this for 100 users...

// Solution Object literal 

let user: any = {
    name: "John Doe",
    age: 30,
    email: "jonh@example.com",
    isActive: true
};

// Accessing object 
console.log(user)

// Accessing properties 
console.log(user.name);
console.log(user.age);

// Improve to make it with type declearation : Type annotation 
let userImprove: {
    name: string,
    age: number,
    email:string,
    isActive: boolean
} = 

{
    name: "John Doe",
    age: 30,
    email: "jonh@example.com",
    isActive: true,
    // title : "docker"  // we can not add new element 
};

// Optional properties 
let employess :{
    name : string,
    age : number,
    email ? : string // ? mean optional
} = {
    name: "alies",
    age : 30,
    // email: "sample@gmail.com"
    // email is optional so this is valid 
}


// Nested objects 

let userWithAddress:{
    name: string,
    age:number,
    address:{
        street: string,
        city: string,
        zipCode: number
    }
} = {
    name:"Mike",
    age:40,
    address:{
        street:"phone",
        city: "Phnom Penh",
        zipCode:3939
    }
}

// Access the properties inside the nested object 

console.log(userWithAddress.address.city)