/**
 * Emitter Object ee.on('event',callback)
 * true/false ee.emit('event',data)
 */
const EventEmitter = require("events");
let emitter = new EventEmitter();
emitter.on("message", async (message) => {
    console.log("Got the message,", message)
})
console.log(emitter.emit("message", "John"));
console.log(emitter.emit("message", "Doe"));
