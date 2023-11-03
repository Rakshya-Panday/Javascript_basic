//array specific loop
//for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,56,5]
for (const num of arr) {
    // console.log(`number are ${num}`)
}

const greeting = "Hello worlds!"
for (const greet of greeting) {
    // console.log(greet)
    
}

//Maps => maps store only unique value not a repeat value and store in order

const map = new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('NP',"Nepal")//map doesnot show repeat value
// console.log(map)

for (const [key,value] of map) {
    // console.log(key,":",value)
    
}

// for (const key in map) { //map is not a iteratable
//     console.log(key)
    
// }

// const myObject = {
//     'Game1':"footaball",
//     Game2 :"volleyball"
// }

// for (const [key,value ]of myObject) {
//     console.log(key,value)
// }


