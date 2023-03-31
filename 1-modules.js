//Node use CommonJS library ,, every file is module
//Modules - encapsulated code
// const hello="hello"
// const say= (MyName)=>{
//     console.log(`hello there ${MyName}`) //backticks
// }
const names=require('./tempModule')//it will be an array(object)
// console.log(names)

const say=require('./utils')//importing a function  
say('kedar')
// say(kedar); //kedar is present in names so we have to use
say(names.name1) 
say(names.name2) 

const data=require('./tempModule2')
console.log(data)

// const ans=require('./tempModule3')()//not assigned to anything 
// ans()
//bcoz it is already invoked in tempmodule3

// meth1
    // const ans=require('./tempModule3')()

// meth2
    // const ans=require('./tempModule3')
    // ans()

// meth3
    require('./tempModule3')
    //have to invoke function in its file itself


// Built in modules 
    // OS module 
    // path 
    // fs module
    // http module  