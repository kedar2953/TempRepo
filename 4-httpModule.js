const http =require('http')
//or creating HTTP servers and making HTTP requests


// callback function 
const server=http.createServer((req,res)=>{
    // console.log(req) // will show the req object , (localhost need to be refreshed to see it)
    
    // res.write('Welcome to home page ')
    // sending the response

    if(req.url === '/')
    {
        res.end('welcome to our home page')
    }
    else if(req.url === '/about')
    {
        res.end('welcome to our about page')
    }
    //default 
    else{
        res.end(`
        <h1>OOPS</h1>
        <p>We cant seem to find the page you are looking for </p>
        <a href="/">back home </a>`
        )
    }
    

    // console.log("listening to port 5000 ")
    // res.end()//to end a response to an HTTP request , argu is optional
    
})
// req(obj) - incoming req from user , res(obj ) = all info about req 

server.listen(5000)
// each server needs a unique port number to listen to incoming requests

/*
web server 
    comp sys that hosts website , runs web server software
    web server for multiple user - shared hosts 
    dedicated web serveres(huge website , high traffic) -  dedicated hosts

    When you enter a URL in Chrome's address bar or click a link on a webpage, Chrome sends an HTTP request to the web server associated with that URL. The web server then responds by sending the requested web page or resource back to Chrome, which displays it on your computer.

*/

// webserver is comp program , 
    //When a user types a web address or clicks on a link, their browser sends a request to the web server asking for the page to be sent back to them. The web server then retrieves the page from its storage location and sends it back to the user's browser, 

    //Web servers typically run continuously,

//HTTP (Hypertext Transfer Protocol)
    //  is a protocol used for communication between clients (such as web browsers
    //An HTTP request is a message that a client sends to a server to request a resource, such as a web page
    // The HTTP request includes information about the resource being requested, such as the URL, the HTTP method (GET, POST, PUT, DELETE, etc.), and any additional headers or data.

    //not necessary to use HTTP for all types of requests
    // However, HTTP is widely used for web-related requests

