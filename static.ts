// Static: helps to access property & method without
// creating new instances

// Create a phone class
class Phones {
    static name: string = 'My New Samsung';
    static price: number = 33;
    static rate: number;
    static color: [];

    constructor(name: string, price: number, rate: number, color: string[]) {
        this.name = name;
        this.price = price;
        this.rate = rate;
        this.color = color;
    }

    // showInfo() {
    //     return `Your phone: ${this.name} : price: ${this.price}
    //             rating: ${this.rate} stars & color: ${this.color.length} colors`
    // }

    static testStatic() {
        return `Hello Static`
    }
}

// var phone1 = new phones('iPhone X', 1000, 4, ['silver', 'gold', 'red'])

console.log(Phones.name);
console.log(Phones.price);
console.log(Phones.testStatic());
