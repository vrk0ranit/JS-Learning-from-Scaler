var a = 2//external factor on which function depend
//Thats'why it's a impure function


function addImpure(x){
    console.log(x+a)
    a++
}


addImpure(2)

addImpure(2)

addImpure(2)

//pure funtion
//Do not use any external factor

function addPure(x , a){
    return x + a
}

console.log(addPure(4,5))