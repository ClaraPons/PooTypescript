import { Zoo } from "./Zoo";
import { Client } from "./humans/Client";
import { Employee } from "./humans/Employee";
import { Humain } from "./abstract/Humain";
import { Loup } from "./animal/Loup";
import { IAnimal } from "./interface/animal";
import { Girafe } from "./animal/Girafe";
import { Canard } from "./animal/Canard";

let zoo: Zoo = new Zoo("Paris", "Zooland");

let client : Humain = new Client("Jean", 100);
let employee : Humain = new Employee("Louis", 1000);

console.log(`\nZoo : ${zoo.getName()} situe a ${zoo.getLocation()}\n`);

console.log('Liste employee et client :\n');
if (client instanceof Client) {
    console.log(`Le client ${client.getNom()} a consommé ${client.getConsommation()} kilos de nourriture`);
}
if (employee instanceof Employee) {
    console.log(`L'employe ${employee.getNom()} a un salaire de ${employee.getSalary()} €`);
}

console.log('\nListe animaux et classe :\n');

const animals: IAnimal[] = [new Loup(), new Girafe(), new Canard()];

for(let i = 0; i < animals.length; i++) {
    console.log(`${i+1} - Le ${animals[i].getNom()} est un animal ${animals[i].getClasse()}`);
}
console.log('\n');



