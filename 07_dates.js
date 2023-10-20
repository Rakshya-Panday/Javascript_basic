//Dates
 let myDate = new Date();
 //console.log(myDate)

 // we have different method of dates 
//  console.log(myDate.toString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.toDateString())
//  console.log(typeof myDate)

let createMyDate = new Date(2023 , 0,12)
let createMyDate1 = new Date(2023 , 0,12,5,7,9)
let createMyDate2 = new Date("2023-01-04")
// console.log(createMyDate.toDateString())
// console.log(createMyDate1.toLocaleString())
// console.log(createMyDate2.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp)//time alwaz show the result in milisecond
// console.log(createMyDate.getTime())

const newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMinutes())

