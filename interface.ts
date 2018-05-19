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

// Use interface in Class
interface Phones {
    name: string;
    price: number;
    desc: string;

    showInfo() : void;
    showPrice(price: number) : any;
    showDes() : void;
}

// Implements interface -> class -> Must have all the props & methods
// above & may expand more 
class Apple implements Phones {
    name: string;
    price: number;
    desc: string;

    showInfo() : void {
        console.log('Check Apple Phone Info');
    }

    showPrice(price: number) : any {
        return `Too expensive`;
    }

    showDes() : void {
        console.log('Nice phone tho');
    }
}