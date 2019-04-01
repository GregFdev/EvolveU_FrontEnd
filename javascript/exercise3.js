// change everything below to the newer Javascript!

// let + const
const a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;


// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

let okObj = {a, b, c};



// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let firstName = "greg";

let message = `Hello your name is ${firstName}`;



// default arguments
// default age to 10;
const isValidAge = (age=10) => age;
    

// Symbol
// Create a symbol: "This is my first Symbol"
let xer = symbol("This is my first symbol");


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI2 = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}