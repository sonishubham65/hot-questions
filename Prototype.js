/**
 * what is Prototype?
 * 1. A prototype is an object that is associated with every object by default.
 * 2. Now in JS, function protoype is accessible and modifiable.
 * 3. The protoype is not visible so it does not create grabage and improves performance.
 * 
 * Properies can be:
 * writable: get assigned with a new value.
 * enumerable: seen in "for in"
 * configurable: deleted
 */
function Employee(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Name of Employee is: ${this.name}`);

    Object.defineProperty(this, 'canDance', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            console.log(this.age)
            if (this.age <= 30) {
                console.log(`${this.name} can dance`);
            } else {
                console.log(`${this.name} can't dance`);
            }
        }
    })
}
Employee.prototype.squareAge = function () {
    console.log(`Square of his age would be: ${Math.pow(this.age, 2)}`);
}

console.log(Employee)

let employee1 = new Employee("Shubham", 26);
employee1.squareAge();
employee1.canDance();