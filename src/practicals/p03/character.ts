export class Character{
  name:string = "";
  health:number = 100;
  constructor(name: string, health: number = 100) {
    this.name = name;
    this.health = health;
  }
getName(){
  return `${this.name}`
}
getHealth(){
  return this.health
}
receiveDamage(damage: number){
  return this.health = this.health - damage
}

}