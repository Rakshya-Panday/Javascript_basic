const name = "rakshya"
const surname = "panday"
//console.log(name +surname + "Beautiful")  this is  not a right way to concat string instead of this we can use backtick

console.log(`Hello ${name} and your surname is ${surname}`) //this backtick also known as string interpolation
//another way to create a string is 
const home = new String("tamghas")
console.log(home)
//we have differnt method and properties of string
// console.log(name.length)//it give the length of the string
// console.log(name[1]) //it give the index or key value pair of string

//++++++++++++++++++++++++++Methods of the String ++++++++++++++++++++++++++++++++++++++
console.log(name.__proto__)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.anchor())//not recommend to use
console.log(name.at(4))//takes index and display its corresponding value
console.log(name.big())
console.log(name.blink())//not recommend to use
console.log(name.bold())//not recommend to use
console.log(name.charAt(4))
console.log(name.charCodeAt(5))//it show the unicode value
console.log(name.includes('r'))
console.log(name.indexOf('k'))
console.log(name.trim())
console.log(name.slice(2,6))
console.log(name.valueOf())
console.log(name.substring(2,6))
console.log(name.toString())
