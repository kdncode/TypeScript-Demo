// Create a class
class Cars {
    name: string;
    price: number;
    color: string [];

    constructor(name: string, price: number, color: string[]) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    showInfo() {
        let myInfo : string = '';

        for (let i = 0; i < this.color.length; i++) {
            myInfo += this.color[i];
            myInfo += ', '
        }

        return `Car name: ${this.name}
                Price: ${this.price}
                color: ${myInfo}`
    }
}

let honda = new Cars('Honda', 30000, ['green', 'red', 'black', 'white'])
let toyota = new Cars('Toyota', 20000, ['gold', 'orange', 'gray'])

console.log(honda.showInfo());
console.log(toyota.showInfo());


// Inheritence 
class Moto extends Cars {
    tire: number;

    constructor(name: string, price: number, color: string[], tire: number) {
        super(name, price, color);
        this.tire = tire;
    }

    showInfo() : string {
        let myInfo : string = '';

        for (let i = 0; i < this.color.length; i++) {
            myInfo += this.color[i];
            myInfo += ', '
        }

        return `Car name: ${this.name}
                Price: ${this.price}
                color: ${myInfo}
                tire: ${this.tire}`
    }
}

let suzuki = new Moto('Suzuki', 3000, ['green', 'rose'], 2);
console.log(suzuki.showInfo());