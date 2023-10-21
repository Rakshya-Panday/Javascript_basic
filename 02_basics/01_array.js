// Array in javascript 
const arr = [1,2,3,45,6]
// console.log(arr[1])

const arr1 = new Array(1,2,3,4,5,6,7)
// console.log(arr1.length)
arr1.push(5)//insert at end
arr1.pop()//delete from end
arr1.shift()//delete from front
arr1.unshift(0)//insert in front
console.log(arr1.includes(1))
console.log(arr1.indexOf(3))
 let ar = arr1.join()//convert the array into string

 let a1 = [1,2,3,4,5,6,7,8,9]
  let s = a1.splice(1,3)//it  change the orginal array 
//   console.log(s)
//  console.log(a1)
let a2 = [6,5,6,7,3,2,1]
console.log(a2.slice(1,3))//it doesnot change the orginal array 
console.log(a2)

// console.log(arr1)