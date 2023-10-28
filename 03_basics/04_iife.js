// Immediately invoked function expression (IIFE) to remove the pollution of global scope and run immediately when function ids define.

(function chai (){
    console.log(`DB CONNECTED   `);
}
)();//second bracket means execution

((name)=>{
    console.log(`"DB CONNECTED TW0" ${name}`);
})("rakshya")

