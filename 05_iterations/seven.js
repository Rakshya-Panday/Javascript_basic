const myNumbers = [1,2,3,4,5,6,7,8,9,10];

//Map also a callback function return is necessary when scope is open

// const newNums = myNumbers.map((num)=>{
//     return num+10})
// console.log(newNums)

//chaining means one after another map vitra map map vitra filter

const newNums = myNumbers
                        .map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>50)
console.log(newNums)
                   

// const newNums = myNumbers.forEach((num)=>{
//     return num+10
// })
// console.log(newNums)

// const newNums = myNumbers.filter((num)=>num>5)
// console.log(newNums) 

//notes ====== map and forEach are same both are used for iteraytions but forEach doesnot return value but map return value and both are call back fynction but filter is a callback function it return a value with certain condition.