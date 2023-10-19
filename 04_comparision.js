// console.log(2<1)
// console.log(2>1)
// console.log(2==1)


//so avoid the conversion which have differnt datatypes
//it is recommend to compare a value having the same datatypes because it doesnot provide a predict value
// console.log("2"<1)
// console.log("2">1)
// console.log("2"==1)


//eqality ==, comparision <, >, <=, >= works differntly as comparision convert null to a number and treating as a 0 that why it show dofferent result
console.log(null<1) //true
console.log(null>1)//false
console.log(null==1)//false

//in undefined it shows only false output
console.log(undefined<0)//false
console.log(undefined>0)//false
console.log(undefined==0)//false

// strict type comparision  === it check the value as well its dataypes if there is comparision among different datatypes it show false result
console.log(2===2)//true
console.log("2"===2)//false


