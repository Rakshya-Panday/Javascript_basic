// const score = 400
// console.log(score)


// const balance = new Number(100)
// console.log(balance)
// //methods of number

// console.log(balance.toString().length)//after change into string we can use all the properties of string
// console.log(balance.toFixed(3))
// const number = 100000000
// console.log(number.toLocaleString())
// console.log(number.toPrecision(3))
// console.log(number.toFixed())
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

//++++++++++++++++ Maths in javascript which is predefined in JS +++++++++++++++++++++
// as like string and number math have also various properties and the function
console.log(Math)

console.log(Math.abs(-3))
console.log(Math.round(4.6)) //we use round than ceil or floor
console.log(Math.ceil(4.3))//it takes upper value output is 5 
console.log(Math.floor(4.6))//it takes lower value output is 4
console.log(Math.sqrt(4))
console.log(Math.pow(2,3))
console.log(Math.min(2,6,3,7))
console.log(Math.max(2,6,3,7))


console.log(Math.random()) // random value is always generates between 0-1
console.log((Math.random()*10)+1) //for certain value more than 0 and 1 we use this.
console.log((Math.round(Math.random()*10)+1))

const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max-min +1))+min)
