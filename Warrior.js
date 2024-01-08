import { Character } from "./Character.js"

export class Warrior extends Character {
  constructor(name, hp, atk, def, shield, position) {
    super(name, hp, atk, def)
    this.shield = shield
    this.position = position
  }

  atkSomeone(Character) {
    if(this.position === 'Attack') {
      const dmg = this.atk  - Character.def 
      const hpDiff = Character.hp -= dmg 
      
      Character.hp = hpDiff
      Character.def -= dmg

      console.log(`${this.name} causou ${dmg} de dano.`)
    } else if(this.position === 'Defense'){
      const dmg = (this.atk - this.shield) - Character.def  
      const hpDiff = Character.hp -= dmg 
      
      Character.hp = hpDiff
      Character.def -= dmg

      console.log(`${this.name} causou ${dmg} de dano.`)
    }
  }
}