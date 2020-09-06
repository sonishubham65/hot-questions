/**
 * What is Async-Await?
 * Async-await is special syntax to work with Promise.
 * We use async-wait for making asynchronous programming easier.
 * Async makes a function to return promise and await waits for that promise.
 * When a function is made as async then it has to return a promise. 
 * values can be accessed with ".then(()=>{})" chain and Error can be catched with ".catch(e=>{})".
 * 
 */

async function callAPI() {
    return "John Doe";
}

//IIFE (Immidiate Invoked function expression)
(async _ => {
    let dataWithAwait = await callAPI();
    let dataWithoutAwait = callAPI();

    console.log(dataWithAwait, dataWithoutAwait); //John Doe, Promise{'John Doe'}

    dataWithoutAwait.then(data => {
        console.log(data);
    })
})()
