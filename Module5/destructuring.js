

// let arr = ['Hi','I', 'am', 'Ranit']



// let [a,b,c,d] = arr

// console.log(a)

//destucturing of object

let myObj = {
    name1 : 'Adam',
    age : 25,
    gender : 'M',
    address : {
        country : 'England',
        city :  'London'
    }
}

let {name1, age , gender, address:{country}} = myObj

console.log(name1)
console.log(age)
console.log(gender)
console.log(country)