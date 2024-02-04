//you need the sum of every element in an array

let num = [1, 2, 3, 4, 10]

// let sum = 0;//accumulating in this imparative method


// for (let i =0;i <num.length;i++){
//     sum = sum + num[i];  
// }

// console.log(sum)

//Reduce Method

let result = num.reduce(function(acc , value){
   let updateSum = acc + value
   return updateSum
},0)

console.log(result);