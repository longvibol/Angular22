const productPrice:number[] = [10,50,20,30,40];


// Map : working with each element
const discountedPrice = productPrice.map(price=> price*0.9);
console.log(discountedPrice);


// Filter : condition 
const greaterThan10 = productPrice.filter(price => price >10);
console.log(greaterThan10);

// Find : find the first Match 
const firstpremium = productPrice.find(p => p > 20);
console.log(firstpremium)


// Reduce 
const productPriceReduce = productPrice.reduce((total, price)=>{
    return total + price
},0);

console.log(productPriceReduce)

// ForEach : Execute a function for each item (no return)
productPrice.forEach(price=>{
    console.log(`Processing payment for $ ${price}`)
});

// SOME - Check if at least one item matches
const hasItemMatch = productPrice.some(price => price > 10);
console.log(hasItemMatch)

// Every - Check if all items match 
const isAllPremium = productPrice.every(price => price > 10);
console.log(isAllPremium)

// Includes - Check if array contains 
const hasSpecifiItem = productPrice.includes(40);
console.log(hasSpecifiItem)

// Indexof - Find position of item match
const position = productPrice.indexOf(40);
console.log(position)

// Sort 
const sortPrice = productPrice.sort((a,b)=> a -b);
console.log(sortPrice)