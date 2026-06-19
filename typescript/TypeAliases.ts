// Problem with create object
let product1:{
    name: string,
    price: number,
    category: string,
    isStock: boolean
} = {
    name:"Mouse",
    price:25,
    category: "Electronic",
    isStock: false
}

let product2:{
    name: string,
    price: number,
    category: string,
    isStock: boolean
} = {
    name:"Mouse",
    price:25,
    category: "Electronic",
    isStock: false
}

let product3:{
    name: string,
    price: number,
    category: string,
    isStock: boolean
} = {
    name:"Mouse",
    price:25,
    category: "Electronic",
    isStock: false
}
// So we need to create data type all the time when we create new object: no meet solid code principle it is repeat again and again

// Solution Create TypeAlias
type Product = {
    name: string,
    price: number,
    category: string,
    isStock: boolean
};

// Now we can resue the type
let laptop : Product = {
    name:"Mouse",
    price:25,
    category: "Electronic",
    isStock: false
}

let mouse : Product = {
    name:"Mouse",
    price:25,
    category: "Electronic",
    isStock: false
}

let phone : Product = {
    name:"Mouse",
    price:25,
    category: "Electronic",
    isStock: false
}

// Array of object (real pratic)

let products: Product[] = [
    {name:"laptop", price:1000, category: "Ele", isStock: true},
    {name:"laptop1", price:300, category: "Ele", isStock: false},
    {name:"laptop2", price:100, category: "Ele", isStock: true}
]
console.log(products)

// Filter Products is stock
let availableProducts = products.filter(p => p.isStock);
console.log(availableProducts)

//stort by price 
let productPrice = products.sort((a,b)=> a.price-b.price);
console.log(productPrice)

// Method Channing 
// Combine filter and sort
let filterandSort = products
    .filter(p => p.price < 300)
    .sort((a,b)=> a.price -b.price)
console.log(filterandSort)

// Type aliase for other types

type UserId = string | number;
let UserIdValue : UserId = "user" // valid
UserIdValue = 123; // also valid because it type of aliase 

type Status = "pending" | "appproved" | "rejected";
let orderStatus: Status = "pending"; // Valid
orderStatus ="appproved" // also valid
// orderStatus = "other" // invalid
