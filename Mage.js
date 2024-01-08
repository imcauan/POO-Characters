import { Character } from "./Character.js";

export class Mage extends Character {
  constructor(name, hp, atk, def, int) {
    super(name, hp, atk, def)
    this.int= int
  }

  atkSomeone(Character) {
    const dmg = (this.atk + this.int) - Character.def
    const hpDiff = Character.hp -= dmg 
    
    Character.hp = hpDiff
    Character.def -= dmg

    console.log(`O dano causado pelo ${this.name} foi de ${dmg}`)

    if(dmg === 0) {
      console.log('Não foi causado dano.')
    } 

    if(Character.def <= 0) {
      console.log(`A defesa de ${Character.name} foi quebrada!`)
      Character.def = 0;
    }

    if(Character.hp <= 0) {
      console.log(`${Character.name} morreu.`)
    }
 }

  healSomeone(Character) {
    return Character.hp = this.int * 2
  }
}
