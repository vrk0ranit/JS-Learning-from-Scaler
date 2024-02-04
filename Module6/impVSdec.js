//we will given a number and we have to  check that if the square of the number even or odd
// Imparative way of writing code

const a = 4

const aSqured = a*a

let isEven;

if(aSqured % 2==0){
    isEven = true
}
else
{
    isEven = false
}
console.log(isEven)

//declarative way of write code

const checkForSqure = (x)=> (x*x%2 ===0 ? true : false)
console.log(checkForSqure(5))