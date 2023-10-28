function myName(){//function = defination
    console.log("rakshya")
}
myName();  //myname=refernce ,()=execute

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)

// }
function addTwoNumber(number1,number2){
    // let num = number1+number2
    // return num;
    return  number1+number2
    
    }


 let num = addTwoNumber(3,4)
 console.log(num)

 function loginUserMessage(username="sam"){
    // if(username===undefined)
    if(!username){
        console.log("please enter ur name")
        return

    }
    return`${username} just logeed in`

 }

//  console.log(loginUserMessage("rakshya"))
// console.log(loginUserMessage())

function calculateCardPrice(...num){
    return num

}
// console.log(calculateCardPrice(200,900,600,500))

const user = {
    username :"rakshya",
    price :1999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and its price is ${anyObject.price}`)

}
// handleObject(user)
handleObject({
    username :"sam",
    price:399
})

const myNewArray = [200,500,300]

function returnSecondArray(getArray){
    return getArray[1]
}

// console.log(returnSecondArray(myNewArray))
console.log(returnSecondArray([300,400,600]))
