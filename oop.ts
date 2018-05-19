class gameCharacters {
    name: string;
    grade: number;

    // Use constructor To create instance
    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }

    run() {}
    pat() {}

    show() {
        return `Character: ${this.name} - grade: ${this.grade}`
    }
}

var character1 = new gameCharacters('Darknight', 22);
var character2 = new gameCharacters('Silverguy', 44);

console.log(character1.show());
console.log(character2.show());

// Create a phone class
class phones {
    name: string;
    price: number;
    rate: number;
    color: [];

    constructor(name: string, price: number, rate: number, color: string[]) {
        this.name = name;
        this.price = price;
        this.rate = rate;
        this.color = color;
    }

    showInfo() {
        return `Your phone: ${this.name} : price: ${this.price}
                rating: ${this.rate} stars & color: ${this.color.length} colors`
    }
}

var phone1 = new phones('iPhone X', 1000, 4, ['silver', 'gold', 'red'])

console.log(phone1.showInfo());
