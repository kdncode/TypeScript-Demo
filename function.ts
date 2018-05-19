// number 
function add() : number {
    return 10 + 20;
}
console.log(add());

// string
function myString(): string {
    return "hello string function";
}

console.log(myString());

// array - String
function array(): string[] {
    return ['ant', 'cow', 'pig']
}
console.log(array()[1]);

// array - Number
function arrayNum(): number[] {
    return [3, 4, 5]
}
console.log(arrayNum());

// any
function myAny(): any {
    let students = {
        name: 'Teo',
        grade: 10
    }
    return students;
}

console.log(myAny());

// Function with parameters
function calculate(x: number, y: number): void {
    let cal = (x + y)/2;
    console.log(cal);   
}

calculate(2, 4)
