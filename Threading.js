//Threading
const path = require('path');
const { Worker, isMainThread, MessageChannel, markAsUntransferable } = require('worker_threads');

if (isMainThread) {
    // This re-loads the current file inside a Worker instance.
    console.log(isMainThread);
    let worker = new Worker("./Threading-child.js", { workerData: 5 });
    worker.postMessage({ message: 111 });
    worker.on("message", (data) => {
        console.log(data)
    })
}