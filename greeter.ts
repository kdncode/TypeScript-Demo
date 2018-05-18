// function greeter(person) {
//     return "Hello, " + person;
// }

// let user = "John Wick";
// document.body.innerHTML = greeter(user);

//Interface
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "John", lastName: "Wick" };

document.body.innerHTML = greeter(user);
