//for Each loop

const coding = ["js","ruby","java","python","swift"]
coding.forEach( (i)=>{
    console.log(`all the programming languages is ${i}`)

})

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)

// })

const myCoding = [
    {
        langusgeNmae: "javascript",
        languageFileName: "js"
    },
    {
        langusgeNmae: "python",
        languageFileName: "py"
    },
    {
        langusgeNmae: "ruby",
        languageFileName: "rbs"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)

})

