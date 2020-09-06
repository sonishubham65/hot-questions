// //=========Remove duplicate from an array=================
// /* var a = [1, 2, 3, 4, 1, 2];
// console.log([...new Set(a)]);
//  */

// //=============reverse a string================
// /* var string = "John is a good boy";
// var reverse = string.split("").reverse().join("");
// var reverse2 = reverse.split(" ").reverse().join(" ");
// console.log(reverse, reverse2); */

// //slice, splice

// // var a = [1, 2, 4];
// // a.length = 0;
// // console.log(a);

// //check if given parameter is an array or not
// //console.log(Object.prototype.toString.call([]));


// //Enque and deque
// // var a = [1, 2, 3]
// // a.push(4)
// // console.log(a)
// // console.log(a[0])
// // a = a.slice(1, a.length)
// // console.log(a)

// // a.shift()
// // console.log(a)


// //splice
// /* var a = [1, 2, 4, 5]
// console.log(a)
// var condition = true; //if need to replace only
// var condition = false; //if need to shift only
// a.splice(2, condition, 10);
// console.log(a) */




// // var a = [1, 2, 3];
// // var b = a;
// // a = [2];

// // console.log(a)
// // console.log(b)



// var Employee = {
//     company: 'xyz'
// }
// var employee = Object.create(Employee);

// var descriptor = Object.getOwnPropertyDescriptor(Employee, 'company');
// descriptor.configurable = false

// //delete employee.prototype.company
// console.log(employee.__proto__);



















