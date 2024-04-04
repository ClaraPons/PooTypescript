export class Zoo {
    private location: String;
    private name : String;

    constructor(location: String, name: String) {
        this.location = location;
        this.name = name;
    }

    public getLocation(): String {
        return this.location;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public setLocation(location: String): void {
        this.location = location;
    }
}