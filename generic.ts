// Normal functions
function add(x: number) : number {
    return x;
}

function add1(x: string) : string {
    return x;
}

// Generic
function add2<T> (x: T) : T {
    return x;
}

console.log(add(11));
console.log(add1("Hello"));

console.log(add2<string>("Hihih Generic"));
console.log(add2<number>(99));