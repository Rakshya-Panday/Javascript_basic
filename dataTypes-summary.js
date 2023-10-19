/*
    Offically DataTypes are categorize into mainly two types primitive and non primitive as how can we store the value in memory and how can we access them.
   1.Primitive dataTypes or call by valuetypes
   callByValue means when we want to copy a value from one location to another it doesnot give refernce of original value it give copy value and when we want to change it change in copy value not a orginal value
   There are 7 datatypes in primitive they are:
   String,Number,Boolean,null,undefined,Symbol,BigInt

   2. Non-Primitive types or Refernce dataTypes all these non primitive datatypes returns as object as types such as arrayObject, functionObject as console it show as function and array or object.
   Refernce dataTypes means it give acess to the value which is stored in memory
   Array,Object,Function
 */

   const id = Symbol('123')
   const accountId = Symbol('123')
   const bigNumber = 123454567788767n//this is bigInt datatpes
   consolelog(id === accountId)

   const name = ["rakshya","apekshya"]
   const desc = {
    name:"rakshya",
    age:21,
   }
   const myFunction = function(){
    console.log("hello worlds")
   }