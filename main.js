const todos = [
    {
        id: 1,
        message: 'Meeting',
        completed: true
    },
    {
        id: 2,
        message: 'Greeting',
        completed: true
    },
    {
        id: 3,
        message: 'Standing',
        completed: true
    },
    {
        id: 4,
        message: 'Reading',
        completed: true
    }
];

// FOREACH, MAP, FILTER
// Foreach = loop trough
// Map = return an Array
// Filter = Filter a Condition (exp: completed === true)
const todoCompTrue = todos.filter(function(todo) {
    return todo.completed === true;
}).map(function(todo){
    console.log(todo.message);
});
console.log('================');

// TERNARY OPERATORS and SWITCH CASE ==============
const x = 4
const colorBasedOnX = x > 10 ? 'Red' : 'Yellow';
const lowered = colorBasedOnX.toLowerCase();

switch (lowered) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'yellow':
        console.log('Color is Yellow');
        break;
    default:
        console.log('Color Is Not Red or Yellow');
        break;
}
console.log('================');

// FUNCTION =========================================
function addTwoNums(num1 = 1, num2 = 1) { // Set default val = 1 if has no parameters
    console.log(num1 + num2);
}
addTwoNums(2,3);
console.log('================');

// OBJECT ORIENTED ==================================

// Constructor
// function Person(firstName, lastName, birthDate) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthDate = new Date(birthDate);
//     // create method get full name
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // note : this is not the best way to inisiate method directly inside the constructor, we can use prototype 
// }
// // Prototype (Object much more cleaner because we can separate a method and a variables)
// Person.prototype.getBirthYear = function () {
//     return this.birthDate.getFullYear();
// }

// CLASS - Write The OOP Example Above in much Better Way ==== 
class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthYear() {
        return this.birthDate.getFullYear();
    }

}

// Inisiation Object
const person1 = new Person('Rifqi', 'Roidi', '5-2-70');
const person2 = new Person('New', 'People', '5-2-98');

console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log('================');

