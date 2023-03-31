// OS 
const os=require('os')
//info about curr user
const user=os.userInfo()
console.log(user)
    //uid - user id (given by os)  gid - group id 
    //shell - default command shell , if null - user doesn't have a default shell or the operating system is unable to determine it.
    // why uid and gid are -1
    
//method returns the system uptime in seconds
// number of seconds since the system was last rebooted or started up
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(), //os release
    totalMem:os.totalmem(),//RAM in bytes
    freeMem:os.freemem()  
}
console.log(currentOS)

console.log("Path module to interact with file path")

const path=require('path')
console.log(path.sep) //return seperator char used in path here it is /

const filename=path.basename('/Users/Refsnes/demo_path.js')//return last name in path 
const dirnames=path.dirname('/Users/Refsnes/demo_path.js')//return directories
console.log(filename)
console.log(dirnames)

//path.join()
const filepath=path.join('/tempdir','tpdir','test.txt') //by default in windows sep is \
// to replace it by /
// const filepath=path.join('/tempdir','tpdir','test.txt').replace(/\\/g,'/')
console.log(filepath)

/*
replace() in js
    string.replace(searchValue, replaceValue)
    regular expression /\\/g searchValue

    forward slash (/) is used to define the regular expression. The backslashes () in the regular expression are escaped with another backslash, as the backslash is a special character in regular expressions.
    g flag -all occurrences of the pattern should be replaced

*/

//absolute path - return absolute path
const absolute=path.resolve(__dirname,'tempdir','tpdir','test.txt')
console.log(absolute)

// our application is going to run in diffn environments e.g in ubuntu sep is / in windows it is \



