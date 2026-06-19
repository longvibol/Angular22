function calculateDiscount(price: number, discountPercent: number) :number {
    const discountAmmount = price * (discountPercent / 100);
    const finalPrice = price - discountAmmount;
    return finalPrice;
}

let laptopPrice = calculateDiscount(1200, 10);
let phonePrice = calculateDiscount(800, 15);
console.log(laptopPrice, phonePrice);

// Optional parameters (problematic)
function greetUser(name: string, age ?: number): string {
    return `Hello ${name}, you are ${age} years`;
}

let vibol = greetUser("vibol");
console.log(vibol) // age will be undefined 

// Better solutin we use default value 
// Default parameters 

function calcuateTax(amount: number, taxRate: number = 18){
    return amount + (amount * taxRate  / 100);
}

let withDefaultTax =  calcuateTax(1000); // Uses 18% default 
let withCustomeTaz = calcuateTax(1000, 20); // use 20% 

// Arrow functions
const multiply = (a: number, b: number): number =>{
    return a *b;
}

let a = multiply(10,20);
console.log(a)