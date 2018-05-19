// Use interface to declare the common name
// for a group to make sure all dev use the same name

interface people {
    name: string;
    age: number; // use age? : number -> age can be use or not
}

function showInfo(student : people) : void {
    console.log(`
        Hello ${student.name}, are you ${student.age} years old?
    `);
}

showInfo({name: 'John', age: 33})