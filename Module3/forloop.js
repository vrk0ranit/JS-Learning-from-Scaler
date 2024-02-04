//loops are the statements that we can use to control a flow of the program and to some repetation

var a = 'Hello World'

//for loop

for(var i=0 ; i<=10 ; i++){
    console.log(a)
}


//you have an array and you have to square each element

var num = [2,3,4,5,6,7,8]

var squaredArr = [] //empty array

for(var i=0; i<num.length; i++){
   squaredArr.push(num[i]*num[i])
}

console.log(squaredArr)

