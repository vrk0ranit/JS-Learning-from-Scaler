

//let arr = [1 ,2 , 3, 4, 5]

//let isSquaredArr = []

//for(let i=0;i<arr.length;i++){
  //  isSquaredArr.push(arr[i]*arr[i])
//}

//console.log(isSquaredArr)

// map
//map will loop through every element of your array and will perform specific operations that you have provide
//map always return you a new array

const num = [1,2,3,4,5]
const squredNum = num.map(function(n){
    return n*n
})

console.log(squredNum)

const transactions = [1000,3000,4000,2000,-898,3800,-4500]

const inrtoDollar = 80;

let transactionsInDollars = transactions.map((amount)=>{
    return (amount/inrtoDollar).toFixed(0)
})

console.log(transactionsInDollars)

let transactionsInDollars1 = transactions.forEach((amount)=>{
    console.log((amount/inrtoDollar).toFixed(0)) 
})

console.log(transactionsInDollars1)


