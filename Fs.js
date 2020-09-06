/**
 * FS Module.
 * File System Module
 * Rename, Unlink, stat
 * watchFile
 * Open Close Read, Write
 * Make a file Open-Write, writeFile
 * 
 * fileRead
 * mkdir
 * rmdir
 */
const fs = require('fs');

/** Remove file */
// fs.unlink('xx.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("File is deleted..")
//     }
// })

/** Remove directory */

// fs.rmdir('xx', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("File is deleted..")
//     }
// })

/** rename file */
// fs.rename('xx', 'yy', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Renamed..")
//     }
// })

// /** Stats of a file */
// fs.stat("yy.txt", (err, stat) => {
//     console.log(err, stat)
// })


// fs.open('./yy.txt', 'a', (err, fd) => {
//     if (err) throw err;

//     // fs.fstat(fd, (err, stat) => {
//     //     if (err) throw err;
//     //     // use stat
//     //     console.log(stat);

//     //     let size = 5;//stat.size;
//     //     let buffer = Buffer.alloc(size)
//     //     fs.read(fd, buffer, 0, size, 3, (err, data) => {
//     //         console.log(err, data, buffer.toString())
//     //     })
//     //     // always close the file descriptor!
//     //     fs.close(fd, (err) => {
//     //         if (err) throw err;
//     //     });
//     // });

//     fs.write(fd, Buffer.from('Hi Shubham Soni', 'utf-8'), (err, data) => {
//         console.log(err, data)
//     })
// });

// fs.watchFile('yy.txt', (data) => {
//     console.log("data", data.size)
// })

// fs.open('fabc.txt', 'a', function (err, fd) {
//     fs.write(fd, Buffer.from("Hhh"), function (err) {

//     })
// })
//fs.writeFile("fabc.txt", "a", function (err, fd) { })