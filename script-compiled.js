"use strict";

//zad.1

var string1 = "Hello";
var string2 = "World";

console.log("Zadanie 1: " + string1 + " " + string2);

//zad.2

var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log("Zadanie 2: " + multiply());

//zad.3

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        return sum += arg;
    });
    return sum / args.length;
};
console.log("Zadanie 3: " + average(5, 45, 87));

//zad.4 
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log("Zadanie 4: " + average.apply(undefined, grades));

//zad.5 
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];

console.log("Zadanie 5: " + firstname + " " + lastname);
