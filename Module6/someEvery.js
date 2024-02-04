//some method

//some: Condition check: To get true or false based on a condition
//It will return true if even 1 element satiffy the condition

const transactions = [-1000, -3000, -4000, 2000, -898, -3800, -4500];

let result = transactions.some(function(n){
    return n>0
})

console.log(result);

//every method
//check every element if any one is false then it return false

let resultEvery = transactions.every(function(n){
    return n>0
})
console.log(resultEvery)


