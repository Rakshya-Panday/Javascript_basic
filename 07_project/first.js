const button = document.querySelectorAll(".button");
// console.log(button);

const body = document.querySelector('body');

button.forEach((btn)=>{
   console.log(btn);
   btn.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
   })
});