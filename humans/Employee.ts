
import { Humain } from "../abstract/Humain";
export class Employee extends Humain {
    private _salary: number;
    public constructor(nom: String, salary: number) {
        super(nom);
        this._salary = salary;
    }
    
    public getSalary(): number {
        return this._salary;
    }
}