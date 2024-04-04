import { IAnimal } from "../interface/animal";
import { AnimalClasse } from "../Enum/AnimalClasse";

export class Girafe implements IAnimal {
     nom: String;
     classe: String;

    public constructor() {
        this.nom = this.getNom();
        this.classe = this.getClasse();
    }
    public getNom(): String {
        return "Girafe";
    }
    public getClasse(): String {
        return AnimalClasse.HERBIVORE;
    }
}