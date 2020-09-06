// console.log('Inside Worker!');
// 'use strict';
// let store = [];
// for (let i = 0; i < 7e7; i++) {
//     store.push(i);
// }
// console.log("Done", store.length);

var { parentPort, workerData } = require('worker_threads');
//console.log(a);
parentPort.on('message', (data) => {
    console.log(workerData);
    // const sharedBuffer = new SharedArrayBuffer(400);
    // const arr = new Int32Array(sharedBuffer);
    // for (let i = 0; i < 100; i += 1) {
    //     arr[i] = Math.round(i);
    // }
    parentPort.postMessage({ ok: 1 });
});