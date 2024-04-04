import { IAnimal } from "../interface/animal";
import { AnimalClasse } from "../Enum/AnimalClasse";

export class Canard implements IAnimal {
     nom: String;
     classe: String;

    public constructor() {
        this.nom = this.getNom();
        this.classe = this.getClasse();
    }
    public getNom(): String {
        return "Canard";
    }
    public getClasse(): String {
        return AnimalClasse.OMNIVORE;
    }
}