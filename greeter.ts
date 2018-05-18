// function greeter(person) {
//     return "Hello, " + person;
// }

// let user = "John Wick";
// document.body.innerHTML = greeter(user);

/* Interfaces */

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "John", lastName: "Wick" };

// document.body.innerHTML = greeter(user);

/* Classes */

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jack", "K.", "Chan");

document.body.innerHTML = greeter(user);