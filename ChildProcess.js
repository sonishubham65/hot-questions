/**
 * The child_process module provides the ability to spawn child processes
 */

var spawn = require('child_process').spawn;
if (process.argv[2] == "child") {
    var net = require('net');
    let timer = 0;

    // Event handler for incoming data
    process.stdin.on('data', (data) => {
        let parse = JSON.parse(data.toString());
        console.log("Incoming Input:\n", parse);
    })

    // An interval for sending output to parent process.
    setInterval(() => {
        timer++;
        if (timer == 5) {
            // Additional Standard Output
            let pipe = net.Socket({ fd: 3 });
            //Send an input to parent to kill the process
            pipe.write("killme");
            //process.exit(); //Kill the process by Child itself
        }
    }, 1000);
} else {

    let child = spawn(process.execPath, [__filename, "child"], {
        stdio: [null, null, null, 'pipe'] //stdin, stdout, error, custom
    });
    child.stdin.setEncoding = 'utf-8';
    let count = 0;
    let input_iterator = setInterval(() => {
        count++;
        child.stdin.write(JSON.stringify({ name: "John", count: count }));
    }, 1000);

    child.stdio[0].on('data', function (data) {
        console.log("Input to Child:\n", data.toString());
    })
    child.stdio[1].on('data', function (data) {
        console.log("Output from Child:\n", data.toString());
    })
    child.stdio[2].on('data', function (data) {
        console.log("Error from Child:\n", data.toString());
    })


    child.stdio[3].on('data', function (data) {
        console.log("Output from Child to kill the process and Stop timer for incoming data::\n", data.toString());
        if (data.toString() == 'killme') {
            //Stop the timer and Kill the process
            clearInterval(input_iterator);
            child.kill();
        }
    })
}