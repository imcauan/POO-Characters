import { Character } from "./Character.js"

export class Thief extends Character { 
  constructor(name, atk, hp, def) {
    super(name, hp, def)
    this.atk = atk
  }

  atkSomeone(Character) {
     const dmg = (this.atk * 2) - Character.def
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
}
