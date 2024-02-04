

var scores = [60 , 90 , 80 , 75]

//syntax

for(var score of scores){
    console.log(score)
}

//method - entries()

let colors = ['Red', 'White', 'Green']

for(var [index , color] of colors.entries()){
    console.log(index+' ->'+color)
}

//strings

var str = 'saclar'

for(var c of str){
    console.log(c)
}