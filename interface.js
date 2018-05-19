// Use interface to declare the common name
// for a group to make sure all dev use the same name
function showInfo(student) {
    console.log("\n        Hello " + student.name + ", are you " + student.age + " years old?\n    ");
}
showInfo({ name: 'John', age: 33 });
