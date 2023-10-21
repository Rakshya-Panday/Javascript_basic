let girls = ["rakshya","apekshya","tara"]
let boys = ["ram","shyam","hari"]
//girls.push(boys) // while doing this it concat two array but it act another array as single value so for that case we use concat.
// console.log(girls)

 let new1 = girls.concat(boys) //use concat we can join two array as single array
//  console.log(new1)

 //by using spread operator

 let clz = ["pkmc","pk","rr"]
 let scl = ["pragya","padsala","st.marys"]



 let all_scl = [...clz , ...scl]
 console.log(all_scl)

 const another_array = [1,2,4,[4,6,7],[6,7,8,[7,89,0]]]
 const realarray = another_array.flat(Infinity)
 console.log(realarray)

 console.log(Array.isArray("rakshya"))//it check whether is array or not
 console.log(Array.from("rakshya"))//convert into array

 console.log(Array.from({name:"apekshya"})) //it show blank array coz we have to say how to make array using value or key

 let score1 = 100
 let  score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3))//of combine all into a single array

