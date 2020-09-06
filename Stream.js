/**
 * Streams:
 * Stream is an abstract to work with streaming data.
 * The module provides an api to work with stream data.
 * process.stdout is a stream.
 *
 * It can be readble, writable and both.
 * 
 * Writalbe: The stream that can be written, fs.createWriteStream
 * Readble: The stream that can be read, fs.createReadStream
 * Duplex: The stream that can be read and written both, net.Socket
 * Transform: Trannform the data when read or write.
 * 
 * 
 * http.createServer
 * cork and uncork
 */
//const stream = require('stream');
const fs = require('fs');
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    // res.write('Hello World!'); //write a response to the client
    // res.end(); //end the response
    let readStream = fs.createReadStream('./mov.mp4', { start: 8000, end: 8010 });
    readStream.on('open', (fd) => {
        console.log("open", fd);
        readStream.pipe(res)
    });
    readStream.on('error', (fd) => {
        console.log("error", fd);
        readStream.pipe(res)
    });

}).listen(8080); //the server object listens on port 8080
