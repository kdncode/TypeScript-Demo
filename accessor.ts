class Hero {
    private _name: string;

    constructor(_name: string) {
        this._name = _name;
    }

    public get name() : string {
        return this._name;
    }
    
}

let zeus = new Hero('Zeus');
console.log(zeus.name);
