/**
 * ES6 is Sugar coated over the protoype-base OO pattern.
 * Features
 * 1. Arrow function
 * No binding of "this".
 * Defined with =>
 * It can return values as well as expression.
 *
 * 2. Classes
 * Prototype based OO pattern.
 * It supports prototype bases inheritance with extends, Superc calls, Instance, static methods and constructors.
 *
 * 3. Template String.
 * It provides a feature to construct a string with variables.
 *
 * 4. Destructuring (Rest operator)
 * Binding variables using pattern
 * var [a,,b] = [1,2,3];
 * var {a,b} = {a:1,b:22};
 *
 * 5. Spread Operator
 * function abc(a,...b){
 * }
 * abc("John",1,4,5,22);
 *
 * 6. Let, Const
 *
 * 7. Iterators
 * For of
 * For in
 *
 * 8. Unicode support
 * 9. Module
 * 10. Promise
 * 11. Symbol
 * 12. Map
 * 13. Reduce
 * 14. Filter
 *
 *
 *
 * //ES7
 * Array.prototype.includes
 * exponetial operator 2**3 = 8
 *
 * //Es8
 * async, await
 * Object.values
 * Shared memory with workers with buffer.
 * padStart
 * Object.getOwnPropertyDesceriptors for making writeble and enumarable
 *
 * //ES9
 * Spread Operator ...
 * Rest operator {}
 *
 * Hoisting
 *
 * Bind, call, apply differnce
 */

function* abc() {
    let index = 0;

    while (true) {
        console.log(index);
        yield index++;
    }
}
let g = abc();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())