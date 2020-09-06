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
