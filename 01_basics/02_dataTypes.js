// Javascript has 8 Datatypes.
/*
    String
    Number
    Bigint
    Boolean
    Undefined
    Null
    Symbol
    Object

The object Datatype:
    The object data type can contain both built-in objects, and user defined objects:

    Built-in object types can be:
        objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.


*/

// Numbers:
let length = 10;
let weight = 7.6;
console.log(length);
console.log(typeof weight);

// strins:
let str1 = "nazim khan";

// Boolean:
let flag = true;
let isCorrect = false;

// Object:
const person = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person);
person.firstName = "kasim";
console.log(person);
console.log(typeof person);

// Array Object:
const cars = ["Honda", "ciaz", "BMW"];
console.log(cars);
console.log(typeof cars);

// Date object:

const date = new Date("2023-09-04");
console.log(date);
console.log(typeof date);

// BigInt:
// BigInt is a type of number that can represent very large or very small integers beyond the range of the      regular number data type.
// Note: The regular number data type can handle values less than (2^53 - 1) and greater than -(2^53 - 1).
let value1 = 900719925124740998n;
console.log(value1 + 1n);

// undefined:
// undefined represents the absence of a value.
// let name;
// console.log(name, typeof name);

// null:

// null represents "no value" or "nothing"
let number = null;
console.log(number, typeof number); // null type of null is object.

// Note:
