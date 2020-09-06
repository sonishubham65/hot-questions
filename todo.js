console.time();
console.log("hi");
function multiple(times) {
    return (number) => times * number;
}
let twice = multiple(2);
let thrice = multiple(3);

console.log(twice(5));
console.log(thrice(5));
console.timeEnd();