//FS(file system) Module - file system module
    // to interact with fs  - (non blocking)asynchronous or (blocking) syn
    const {readFileSync , writeFileSync}=require('fs') //setting up the structure
    /* or
        const fs=require('fs')
        fs.readFileSync()
    */
    // readFileSync('pathTOFile','decodingTechnique')
    const fileread=readFileSync('.\\tempdir\\tpdir\\test.txt','utf8')
    // backslash also used as an escape character in JavaScript strings.
    //  const fileread = readFileSync('.\\tempdir\\tpdir\\test.txt', 'utf8');
    
    // forward slashes (/) as the path separator in Node.js, which works in both Windows and Unix-like operating systems:
    // const fileread = readFileSync('./tempdir/tpdir/test.txt', 'utf8');
    console.log(fileread)
    
    // Synchronous file reading: readFileSync() is a synchronous method, which means that it will block the execution of any further code until the file has been completely read. This can be useful in situations where you want to ensure that the file has been fully read before proceeding with other parts of your code.
    
    // create a file using writeFileSync
    writeFileSync('./tempdir/tpdir/sync.txt','Created a file')
    //if file is not there , node will create file , else it will override the content
    
    
    //Asynchronous
        // synchronous methods, such as readFileSync() and writeFileSync(), block the main thread of execution until the operation is complete. This means that the program will not continue to execute until the file operation is finished.
        // can be useful where you need to perform file operations in a specific order
        // problematic in larger applications, as they can cause the program to become unresponsive if the file operation takes a long time to complete.
        //asynchronous methods, such as readFile() and writeFile(), do not block the main thread of execution.
        console.log("this is async fs module")
    
    const fs=require('fs')
    fs.readFile('./tempdir/tpdir/test.txt','utf-8',(err,data)=>{
        if(err) throw err;
        console.log(data)
        
    })
    console.log("start")
    fs.writeFile(
        './tempdir/tpdir/async.txt',
        'This is async fs module',
        (err)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log("data submitted successfully")
                
        }
    )
    console.log("ready for next")
    // callback function - passed as argu to another funct , and is invoked later 
        //callback function allow the caller function to continue executing while the callback function runs asynchronously in the background.
    //fs.writeFile function is called. This function writes data to a file, but it takes some time to complete because it needs to interact with the file system. While the fs.writeFile function is running, the rest of the code continues to execute.
    // The console.log("ready for next") statement is executed immediately after fs.writeFile is called.