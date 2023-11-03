let score = "33abc"
//there are two ways to check the datatype of variable 1. typeOf and another is write a method means write inside ()
//console.log(typeof score)
//console.log(typeof(score))
let chgNumber = Number(score);
//we can convert a number to string or any other datatypes using Number String Booelan etc remeber that we can use capital ways not a number
// n this show NaN output as chg that that of string into number we cannot easily convert that type od datatypes rember that.
//console.log(typeof chgNumber);
//console.log(chgNumber)
//33=>33
//"33an"=>NaN => not a number
//true/false => 1/0
//null = object
//undefined = undefined

//*************************Opeartion****************************** */
let value = 6
let newValue = -value
//console.log(newValue)
//console.log(2+2)
//console.log(2**3)// 2 times ** means power

// console.log(1+"2")//in this it will concat both of them n the result will be 12
// console.log("1"+2)
// console.log(1+2+"3")//it first perform the operation then only concat simply paile j aayo tei is string then it concat if number it perform opeartion

// console.log(3+5*5-9)//this is not a effective way to write a code using paranthesis.
// console.log((3+2)*6/6)

console.log(+true)//this is the worst type of coding readability is most important
console.log(+"")

let num1,num2,num3
num1=num2=num3=2+2//this is also a wrost type coding make it readible first

let gameCounter = 100
gameCounter++//postfix
++gameCounter//prefix
console.log(gameCounter)
