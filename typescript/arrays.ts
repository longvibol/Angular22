// Problem: Multiple separate variable 
let price1: number = 99.99;
let price2: number = 149.99;
let price3: number = 899.99;
// Imagine having 100 proudcts...

//Solution: using arrays
//Method 1: Square bracket syntax 
let productPrices: number[] = [100,200,300];

//Method 2: Array generic syntax 
let discountPrices: Array<number> = [10,20,30,40];


// 1- Adding items
discountPrices.push(98);
discountPrices.push(989);
console.log(discountPrices)

// 2- Accessing items by index
console.log(discountPrices[0])
let secondPrice = discountPrices[1]
console.log(secondPrice)

// 3- Getting array length
let totalProducts = productPrices.length
console.log(`We have ${totalProducts} products`);

// String arrays
let emailList: string[] = [
    "user1@example.com",
    "user2@example.com",
    "user3@example.com"
];

// Adding to string 
emailList.push("user4@example.com")

console.log(emailList)

// Type safety

let quantities: number[] = [10,20,30];
quantities.push(40); // valid
// quantities.push("fifty"); // Error! Must be number