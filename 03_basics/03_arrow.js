const user = {
    username: "rakshya",
    price:999,
    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "rakshya"
//     console.log(this.username)
// }
// chai()


// +++++++++ Arrow Function +++++++++

const chai = ()=>{
    let username = "rakshya"
        console.log(this)
}
// chai()

// const addTwo= (num1,num2)=>{
//     return num1+num2

// }

//Implicit return  means (not necessary to use return)only in one line so no need of {} and return
const addTwo= (num1,num2)=> ( num1+num2)




console.log(addTwo(3,7))

const myArray = [1,2,3,5]
myArray.forEach(()=>{
    
})

