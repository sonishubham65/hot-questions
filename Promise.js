/**
 * Promise is to handle the fullfilment or rejection.
 * .then and .catch can be chained with Promise.
 * .then to handle fullfilment and rejection and catch can be used for handling errors.
 * 
 * A Promise is in one of these states:
 * Pending
 * fullfilled
 * rejected
 */
new Promise((resolve, reject) => {
    //reject("undefined value.");
    resolve(1)
}).then((data) => {
    console.log("Data", data)
}).then(() => {

}).catch(e => {
    console.log("Error1", e);
}).catch(e => {
    console.log("Error2", e)
}).then(() => {
    console.log("THEN");
})

Promise.all([
    new Promise((resolve, reject) => {
        resolve(1);
    }),
    new Promise((resolve, reject) => {
        try {
            x
        } catch (e) {
            reject(e.message);
        }
    })
].map(p => {
    return p.then(data => { return { "data": data } }).catch(e => {
        return { error: e };
    })
})).then(data => {
    console.log("data", data)
}).catch(e => {
    console.log("error", e);
})
