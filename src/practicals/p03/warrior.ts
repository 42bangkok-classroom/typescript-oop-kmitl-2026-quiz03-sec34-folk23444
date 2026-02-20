import { Character } from "./character";

export class Warrior extends Character {
  weapon: string = "";

  constructor(name: string, weapon: string, health: number = 100) {
    super(name, health);
    this.weapon = weapon;
  }

  getWeapon(): string {
    return this.weapon;
  }

  receiveDamage(damage: number) {
    const now = this.health;
    this.health = now - (damage - damage * 0.1);
  }
}