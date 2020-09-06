/**
 *
 *
 * 1. Inheritance and multilevel inheritance.
 * A class can inherit the class with extends keyword.
 * A class is same as function, the only difference is "this", under the hood they are same.
 *
 * It is prototype based inheritance.
 * an object has object base and prototype.
 * It does not repeat to reduce garbage collection.
 * It can extends the prototype in following manner.
 * Object->Objectbase->prototype->objectbase->prototype
 *
 */

//ES5
/* function message() {
    this.display = function () {
        console.log(`My Name is ${this.name} and I'm of ${this.age}`);
    }
}
function Person() {
    let name;
    let age;
    Object.defineProperties(this, {
        name: {
            get: function () {
                return name + '_';
            },
            set: function (value) {
                name = value;
                return true
            }
        }
    });
    Object.defineProperties(this, {
        age: {
            get: function () {
                return age + '_';
            },
            set: function (value) {
                age = value;
                return true
            }
        }
    })
}

//Extends with mixin
Person.prototype = Object.assign(new display(), { constructor: Person });
var person = new Person();
person.name = "Shubham";
person.age = 26;
console.log(person.name, element);
person.message();
 */


//ES6 Inheritance, extends with class

/* const _name = Symbol();
const _age = Symbol();
class Message {
    display() {
        console.log(`My name is ${this.name} and I'm of ${this.age}`)
    }
}
class Person extends Message {
    constructor(name, age) {
        super()
        this[_name] = name;
        this[_age] = age;
    }
    get name() {
        return this[_name] + "_";
    }
    set name(value) {
        this[_name] = value;
    }
    get age() {
        return this[_age] + "_";
    }
    set age(value) {
        this[_age] = value;
    }
}

var person = new Person("Shubham");
person.name = "Shubham Soni"
person.age = 26
console.log(person.name, person.age);
person.display(); */


/**
 *
 * 2. Instance member and prototype member
 * Clouser is a instance member while if we define in prototype then it is called prototype member
 * *Object.keys returns only instance members while for member in object
 */

/**
 * 3. Object literal, Factories and constructor.
 * Create an Object
 * Create Function and return value in form of Factory
 * Create class and return Object
 */
/* //1
var person = {
    name: "Shubham",
    age: 26
}
console.log(person);

//2
var person = function (name, age) {
    return {
        name: name,
        age: age
    }
}
console.log(person("Shubham", 26))

//3
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var person = new Person("Shubam", 26);
console.log(person) */


/**
 * Types of variable.
 * Premitive Number, String, Boolean, Symbol, undefined, Null (immutable)
 * Non Premitive Object, function, Array (mutable)
 *
 * let a = 6;
 * let b = 6;
 * a===b true;
 *
 * let a = {name:"Shubham"};
 * let b = {name:"Shubham"};
 * a===b false;
 */

/**
 * Getter and Setter
 * used to get private properties in a function or class
 * in function we use object.definedproperties
 * in class we use Symbol or weakmap
 *
 * let salary = new WeakMap();
 * salary.get(this)
 * salary.set(this, value)
 *
 * const salary = Symbol();
 * this[_salary] = 60000
 * return this[_salary]
 */


/**
 * Access Enumerating properties
 * for (let key in obj)
 * if('radius' in obj)
 * Object.keys(obj)
 */

/**
 * Abstractions:
 * It's a way to hide implementation details and showing only the functionalty
 */


/**
 * Static function are called without making object of a class
 */
// class Person {
//     constructor() {

//     }

//     static show() {
//         console.log("hello");
//     }

// }
// Person.show();



/**
 * Private properties and member
 * In ES5
 * Object.definedproperties getter/setter
 *
 * In ES6
 * Symbol and Weakmap get/set
 */

/**
 * Iterate protype and Instance memeber
 * for(let key in obj)
 *
 * Child.prototype = Object.assign(Parent.prototype, { constructor: Child });
 */

/**
 * Hoisting
 * you can call function before declaration
 * but can not call the function if it is declared with function expression
 *
 *
 * Class declaration and Class Expression are not Hoisting
 */

/**
* @implements: Super
* @description: super() is for calling parent extended class constructor
*/


/**
 * call bind apply
 *
 * Bind and apply accepts array, and call expects each param individually.
 * Bind returns function
 *
 * returns function: bind
 * execute when call
 *
 */
/*
let person = {
    name: "Shubham",
    age: 26
}
let display = function (city, state) {
    let message = `${this.name}, ${this.age} lives in ${city}, ${state}`;
    //console.log(message);
    return message;
}

let call = display.call(person, "Jaipur", "Rajasthan")
console.log(call)

let bind = display.bind(person, "Jaipur", "Rajasthan")()
console.log(bind);

let apply = display.apply(person, ["Jaipur", "Rajasthan"])
console.log(apply);
 */
