// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "12344s"
tinderUser.name = "Rakshya"
tinderUser.isLoggoedIn = false
// console.log(tinderUser)

const regularUser = {
    email :"rakshya@gmial.com",
    fullname: {
          userfullname:{
            firstname :"rakshya",
            lastname:"panday"
          }
    }
}
console.log(regularUser.fullname.firstname)

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

// while access data from database
const user = [
    {
      email :"ragd@dhfgjfh"
    },
    {

    },
    {

    }
]

// console.log(user[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))



//object desturucture

const course = {
    coursename : "js",
    price :"45456",
    courseInstructure :"hitesh"
}

// course.courseInstructure

const {courseInstructure:instuctor}= course
console.log(instuctor)


