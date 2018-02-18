//zad.1

const string1 = "Hello";
const string2 = "World";

console.log(`Zadanie 1: ${string1} ${string2}`);

//zad.2

const multiply = (a =1, b=1) => a * b
console.log(`Zadanie 2: ${multiply()}`);

//zad.3

const average = (...args) => {
    let sum = 0;
    numbers.forEach(arg => sum+=number);
    return sum / numbers.length;
    console.log(`Zadanie 3: ${average(5,45,87)}`);
};



//zad.4 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log = (`Zadanie 4: ${average(...grades)}`);


//zad.5 
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;
console.log(`Zadanie 5: ${firstname} ${lastname}`);
