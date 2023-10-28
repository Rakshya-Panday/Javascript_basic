// var c = 300
let a = 30
//{}curly braces means scope
if(true){
    let a = 10;
    const b = 20
    // console.log("Inner value :",a)
   
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "rakshya"

    function two(){
            const website = "youtube"
            console.log(username)
    }
    // console.log(website)
    two()
}
// one()


if(true){
    const username = "rakshya"
    if(username==="rakshya"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ++++++++++++++++++ Intersting++++++++++++
console.log(addone(5))//we can call a function here also
function addone(num){
    return num+1

}
// addone(5)

// addTwo(5)

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))

