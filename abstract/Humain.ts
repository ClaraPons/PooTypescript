export abstract class Humain {
    private nom: String;

    constructor(nom: String)  {
        this.nom = nom;
    }

    public getNom(): String {
        return this.nom;
    }
}