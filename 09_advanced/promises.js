//promise is a object representing the eventual completion or failure of an asynchronous operations.  => kunai opeartion vakhar nai pxi complete hunxa ke tw fail hunxa huna chai hunxa

//promise takes a callback function
const promiseone =  new  Promise(function(resolve,reject){
    //do an async task
    //db calls ,cryptography,network
    setTimeout(function(){
console.log("Async task is completeed");
resolve()
    },1000)
})

promiseone.then(function(){
    console.log("promise consume")
})//.then have connection with resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyync task 2")
        resolve()
    },2000)

})
.then(()=>{
    console.log("async 2 resolve")
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve({username:"chai",email:"r@gmail.com"});
    },1000)
})
promiseThree.then((user)=>{
    console.log(user)

})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
       let error = true;
       if(!error){
        resolve({username:"hitesh",password:"123"})
       }
       else{
        reject('ERROR Something went wrng')
       }
    },1000)
})

 const username = promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)

}).catch((error)=>{
  console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"rakshya"})
        }
        else{
            reject("Error is occured")
        }
    },1000)
});

// we can handle promise either then catch or by async and await async and wait are exactly same as then and catch its differnce is async wait for a while if it successfully execute it works otherwise it give error therre it doesnot handle the catch
async function consumePromiseFive(){
     try{
        const response = await promiseFive
     console.log(response)
     }
     catch(e){
console.log(e)
     }
}
consumePromiseFive()


// async function getAllUser(){
//    try{
//     const response = await fetch('https://jsonpalceholder.tyicode.com/users')
//     const data = await response.json()
//     console.log(data)
//    }
//    catch(e){
//     console.log(e)
//    }
// }

// getAllUser()

fetch('https://jsonpalceholder.tyicode.com/users').then((reponse)=>{
    return reponse.json()
}).then((data)=>console.log(data))
.catch((error)=>console.log(error))


