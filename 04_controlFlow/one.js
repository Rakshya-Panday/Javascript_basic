// if statement

// const isUserLoggedIn = true
// const temperature = 41

// if(temperature<50){
// console.log("less than 50");

// }
// else{
//     console.log("temperature is greater tha 50");
// }

// < ,>,<=,>=,==,!=,===,!==

// const score = 200
// if(score>100){
//    const power = "fly"
//    console.log(`user power :${power}`)
// }

// console.log(`user power :${power}`)

// const balance = 1000
// // if(balance>500) console.log("test");

// if(balance<500){
//    console.log("less than ");
// }else if(balance <750){
//     console.log("less than  750");
// }
// else if(balance <900){
//     console.log("less than  900");
// }
// else {
//     console.log("less than  1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
 const loggedInFromGoogle = false

if(userLoggedIn && debitCard){
    console.log("Allow to buy a course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to login")
}
