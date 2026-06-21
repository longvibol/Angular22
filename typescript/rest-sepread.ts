// Problem with function 
function addTwoNumber(a:number, b:number):number{
    return a +b;
}

// when it have more than two or more that two how to do it

//Solution ; Rest parameters
function calculationTotal(...price:number[]):number{
    return price.reduce((total, price)=>(total+price),0);
}

//Using with any number of arguments
let total1 = calculationTotal(10,20);
console.log(total1)

