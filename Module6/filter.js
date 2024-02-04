//you have to check even number of an array and put them in a separate array

let numbers = [1, 2, 20, 35, 12, 17, 46]


let evenArray = [];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenArray.push(numbers[i])
    }
}
 console.log(evenArray);


 //filter method
//filter return an newa array it will returns all those elements that matches the specific condition
//if the condition is true it will return the element that condition and if it is false it will discard the element

let num = [1, 2, 20, 35, 12, 17, 46]

let evenNum = num.filter(function(n){
    return n%2==0
})
console.log(evenNum);
