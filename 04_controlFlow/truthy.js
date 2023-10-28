// const userEmail = "h@gmail.com"
const userEmail = []

if(userEmail){
    console.log("got user email")
}else{
    console.log("Dont get a user email")
}

// falsy values  => false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy value => "0","false"," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty")
    
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty")
// }

//Nullish Coaleseing Opeartor (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ??20
console.log(val1)


//Terniary Opeartor

// condition ? true :false

const iceTeaPrice = 100
iceTeaPrice<= 80?console.log("less than 80") : console.log("more than 80")