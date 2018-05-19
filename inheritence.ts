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
console.log(honda.showInfo());
