//we can create a object by using literals and constructor(singleton means which has only one object)
// Object.create this is a singleton or constructor method to declare a object
//object literals
const mySym = Symbol("myKey1")
const jsUser = {
    name : "rakshya",
    "full name ": "rakshya panday",
    mySym :"mykey1",//this treated as simple string
    [mySym] : "mykey2",//yhis treated as a symbol
    age:20,
    location : "kathmandu",
    isLoggedIn : true,
    lastLoggeed : ["monday","friday"],
    email :"rakshya@gmail.com"
}

console.log(jsUser.name)
console.log(jsUser["location"])
console.log(jsUser["full name "])
console.log(jsUser["mySym"])

jsUser.email = "panday@gmail.com"//we can change the object value
// Object.freeze(jsUser) //we can freeze means now we cannot chg the object value.
jsUser.email = "rpp@gmail.com"

console.log(jsUser)


jsUser.gretting = function(){
    console.log("hello JS user")
}

jsUser.gretting2 = function(){
    console.log(`Hello,${this["full name "]}`)
}
console.log(jsUser.gretting())
console.log(jsUser.gretting2())
