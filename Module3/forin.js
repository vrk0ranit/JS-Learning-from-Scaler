var colors = {
    primary : 'Blue',
    Secondary : 'Red',
    ternery : 'White'
}

//syntax

for(var color in colors){
    console.log(colors[color])
}
for(var color in colors){
    console.log(color +' -> '+colors[color])
}

var colorArray = ['Yellow','Green','Orange','Pink']
for(var color in colorArray){
    console.log(colorArray[color])
}
for(var color in colorArray){
    console.log(color+' -> '+colorArray[color])
}


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }