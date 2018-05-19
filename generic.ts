// Normal functions
function add(x: number) : number {
    return x;
}

function add1(x: string) : string {
    return x;
}

// Generic in function -> for flexible 
function add2<T> (x: T) : T {
    return x;
}

console.log(add(11));
console.log(add1("Hello"));

console.log(add2<string>("Hihih Generic"));
console.log(add2<number>(99));

// Generic in class 
class Computers {
    static showInfo<T>(x: T[]) : void {
        console.log(x);   
    }
}

Computers.showInfo<string>(['Macbook', 'Dell', 'HP'])
Computers.showInfo<any>(['Macbook', 4000, true])


// Generic class
class phoneCases<X, Y, Z> {
    id: X;
    name: Y;
    price: Z;

    constructor(id: X, name: Y, price: Z) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showCase() : void {
        console.log(
            `id: ${this.id}
             name: ${this.name}
             price: ${this.price}`
        );
        
    }
}

let Oppo = new phoneCases<number, string, number>(1, 'Oppo Phone', 20);
Oppo.showCase()

let Lg = new phoneCases<number, string, string>(2, 'LG Phone', '10 USD');
Lg.showCase()