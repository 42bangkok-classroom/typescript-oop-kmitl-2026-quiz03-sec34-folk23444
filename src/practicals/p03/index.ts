import { Character } from "./character";
import { Warrior } from "./warrior";

const character = new Character("NPC");

console.log(character.getName());
// NPC

console.log(character.getHealth());
// 100

// NOTE: Character has no armor can't reduce damage
character.receiveDamage(10);

console.log(character.getHealth());
// 90

const warrior = new Warrior({ name: "King Arthur", weapon: "Excalibur", health: 200 });

console.log(warrior.getName());
// King Arthur

console.log(warrior.getHealth());
// 200

// NOTE: King Arthur has great weapon can reduce 10% of damage
warrior.receiveDamage(45);

console.log(warrior.getHealth());
// 159.5

console.log(warrior.getWeapon());
// Excalibur
