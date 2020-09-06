/**
 * A Closure is an inner function that has access to the outer function's variables (scope-chain)
 * Whenever we create a function inside a function that inner function can access outer function's variable and functions.
 * 
 * In other words, a closure gives you access to an outer function’s scope from an inner function
 */
function multiple(n) {

}
function Employee(name) {
    let _name = name;
    return function greet() {
        console.log(_name)
    }
}
let e = new Employee("Shubham");
e()
/* unction Employee(name, age) {
   this.name = name;
   this.age = age;
   this.greet = () => {
       console.log(`Hello, Mr. ${this.name}`);
   }
   this.squareAge = () => {
       console.log(`Square of age would be: ${square(this.age)}`);
   }
   function square(age) {
       console.log(this.age)
       return Math.pow(age, 2);
   }
}
Employee.prototype.sayHi = function () {
   console.log(this)
}
//Beaware, to use arrow functions here
// Employee.prototype.sayHi = () => {
//     console.log(this)
// }
let emp = new Employee("Shubham", 25);
emp.greet();
emp.squareAge();
emp.sayHi(); */