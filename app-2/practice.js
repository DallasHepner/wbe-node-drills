//require module
let http = require('http');
// Save the result of the createServer() method in a variable named server.
let server = http.createServer((req, res) => {
    res.end("hello world!")
})
// Call the server's listen() method with the port number 3001.
server.listen(3001, () => {
    console.log("Server is running!")
})