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
