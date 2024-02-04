 //function printFirstName(firstname, cb){
    // console.log(firstname)
//     cb("Rogers")
// }

// printFirstName('Steve' , printLastName)//callback function


// function printLastName(lastname){
//     console.log(lastname)
// }






 const isEven =(n) =>{
     return n%2==0
 }

 let printResult = (evenFn , num) =>{
     const isNumEven =evenFn(num)
     console.log(`The Number ${num} is an Even Number ${isNumEven}`)
 }

 printResult(isEven,16)//callback function