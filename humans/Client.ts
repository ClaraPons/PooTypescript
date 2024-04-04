import { Humain } from "../abstract/Humain";
export class Client extends Humain {
    private _consommation: number;
    public constructor(nom: String, consommation: number) {
        super(nom);
        this._consommation = consommation;
    }

    public getConsommation(): number {
        return this._consommation;
    }
}