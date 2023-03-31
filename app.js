const amount=12
if(amount<10){
    console.log('small num');
}
else console.log('large num');
// to run - code runner or node filename.js

console.log(__dirname); //this only work in js file not in REPL CLI
// to do it in repl cli - console.log(process.cwd())
// __dirname - available in Node.js when exe file but not in repl

setInterval(
    ()=>{
        console.log("hello")
    },
    1000
)

//Modules in node

