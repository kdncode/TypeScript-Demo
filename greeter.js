// function greeter(person) {
//     return "Hello, " + person;
// }
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "John", lastName: "Wick" };
document.body.innerHTML = greeter(user);
