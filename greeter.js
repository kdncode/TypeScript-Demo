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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jack", "K.", "Chan");
document.body.innerHTML = greeter(user);
