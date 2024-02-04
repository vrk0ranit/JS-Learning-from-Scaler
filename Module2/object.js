var person = {
    firstName :"Adam",
    secondName : 'Smith',
    age : 25,
    ownsCar : false
}


console.log(person)


//dot notation

console.log(person.age)

//Bracket Notation

console.log(person['firstName'])

var cap = {
    firstName : 'Steve',
    lastName : 'Roger',
    age: 102,
    friends : ['Bucky Barens','Bruce Banner','Tony Stark'],
    isAvenger : true,
    adress : {
        state : 'New York',
        city : {
            name : 'Brooklyn',
            pincode : 123456
        }
    }
}

console.log(cap.friends[1])// Bruce Banner

console.log(cap.adress.city.name) //Brooklyn

cap.isAvenger = false

console.log(cap)

cap.movies = ['Age of Ultron','Civil War','First Avenger']

console.log(cap)

delete cap.age

console.log(cap)