//Reduce in jss

const myNums = [1,2,3]

 const myTotal = myNums.reduce((acc,currentValue)=>{
    return acc+currentValue
 },0)
 console.log(myTotal);