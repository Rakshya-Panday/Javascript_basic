//for loop

for(let a =0; a<10;a++){
    const element  =a;

    if(element==5){
        // console.log("5 is a best number")
    }
    // console.log(element)
}
// console.log(element) it show error because out of scope

// for (let i = 0; i <= 10; i++) {
//     // console.log(`outer loop ${i}`)
//     for (let a = 0; a <=10; a++) {
//     //    console.log(`Inner loop value ${a} and outer loop ${i}`)
//     console.log(i + '*'+a +'='+i*a)
        
//     }
    
// }
let myArray = ["flash","batman","supername"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}

//break and continue

for (let index = 1; index <=20; index++) {
    // if(index==5){
    //     console.log(`deatected 5`)
    //     break;
    // }
    if(index==5){
        console.log(`deatected 5`)
        continue;
    }
    console.log(`value of index is ${index}`)
    
}