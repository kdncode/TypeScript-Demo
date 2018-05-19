class Hero {
    private _name: string;

    constructor(_name: string) {
        this._name = _name;
    }

    public get name() : string {
        return this._name;
    }

    public set name(v : string) {
        this._name = v;
    }
    
}

// Getter
let zeus = new Hero('Zeus');
console.log(zeus.name);

// Setter
zeus.name = "I am a new Zeus";
console.log(zeus.name);