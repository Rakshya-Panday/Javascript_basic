// const coding = ["js","java","ruby","python"]
//  const values = coding.forEach((item)=>{
//     // console.log(item)
//     return item


// })
// console.log(values)

//Filter return the value also have to give a condition and filter also takes a callback function as forEach but forEach doesnot return value
const number = [1,2,3,4,5,6,7,8,9,10]
// number.filter((num)=>num>4)
//note that when we open a scope means {} we have to write return in filter
// number.filter((num)=>{
//       returnnum>4
// })
// console.log(number)

const newNums = []
number.forEach((num)=>{
    if(num>4){
        // console.log(newNums.push(num))
    }
})

const books = [
    {title :'Book One',name:'Science',publish:1981,edition:2004},
    {title :'Book two',name:'Math',publish:1985,edition:2006},
    {title :'Book three',name:'History',publish:1999,edition:2007},
    {title :'Book Four',name:'Fiction',publish:2000,edition:2014},
    {title :'Book Five',name:'History',publish:1989,edition:2012},
];

let userBook = books.filter((books)=>books.name==='Science')
 userBook = books.filter((books)=>books.publish>1980 && books.name =='Science')
console.log(userBook)

