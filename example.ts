let a: number;
a = 5;

console.log(a)

/* Array */
let students: string[];
students = ['John', 'Joanna', 'Teo'] 

for (let i = 0; i < students.length; i++ ) {
    console.log(students[i])
}

/* Number */
let myNumber : number[] = [2, 3, 5];
for ( let i = 0; i < myNumber.length; i++ ) {
    console.log(myNumber[i])
}

/* Boolean */
let flag : boolean = true;
console.log(flag)

/* Enum */
enum myStatus { newUser, addToCart };
console.log(myStatus.newUser);

/* Tuple is a mix of both string & number */
let newStudents : [string, number];
newStudents = ['Hero', 22]
console.log(newStudents)

/* Any */
let x : any;
x = "Hello Any Type"
x = 100;
console.log(x)