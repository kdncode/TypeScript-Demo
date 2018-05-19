// // Create a class
// class Cars {
//     name: string;
//     price: number;
//     color: string [];

//     constructor(name: string, price: number, color: string[]) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//     }

//     showInfo() {
//         let myInfo : string = '';

//         for (let i = 0; i < this.color.length; i++) {
//             myInfo += this.color[i];
//             myInfo += ', '
//         }

//         return `Car name: ${this.name}
//                 Price: ${this.price}
//                 color: ${myInfo}`
//     }
// }

// let honda = new Cars('Honda', 30000, ['green', 'red', 'black', 'white'])
// let toyota = new Cars('Toyota', 20000, ['gold', 'orange', 'gray'])

// console.log(honda.showInfo());
// console.log(toyota.showInfo());


// Inheritence 
// class Moto extends Cars {
//     tire: number;

//     constructor(name: string, price: number, color: string[], tire: number) {
//         super(name, price, color);
//         this.tire = tire;
//     }

//     showInfo() : string {
//         let myInfo : string = '';

//         for (let i = 0; i < this.color.length; i++) {
//             myInfo += this.color[i];
//             myInfo += ', '
//         }

//         return `Car name: ${this.name}
//                 Price: ${this.price}
//                 color: ${myInfo}
//                 tire: ${this.tire}`
//     }
// }

// let suzuki = new Moto('Suzuki', 3000, ['green', 'rose'], 2);
// console.log(suzuki.showInfo());

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

        let myCar = `Car name: ${this.name}
                Price: ${this.price}
                color: ${myInfo}`;
        
        console.log(myCar);     
    }
}

let honda = new Cars('Honda', 30000, ['green', 'red', 'black', 'white'])

honda.showInfo();


// Shorten the code in function by using super.function

class Moto extends Cars {
    tire: number;

    constructor(name: string, price: number, color: string[], tire: number) {
        super(name, price, color);
        this.tire = tire;
    }

    showInfo() : void {
        super.showInfo();
        console.log(`With ${this.tire} tires`);
        
    }
}

let suzuki = new Moto('Suzuki', 3000, ['green', 'rose'], 2);
let yamaha = new Moto('Yamaha', 4000, ['black', 'red'], 2);
suzuki.showInfo();
yamaha.showInfo();