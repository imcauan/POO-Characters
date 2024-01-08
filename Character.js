export class Character {
  constructor(name, hp, atk, def) {
     this.name = name
     this.hp = hp
     this.atk = atk
     this.def = def ?? 0
  }

  atkSomeone(Character) {
      const dmg = this.atk  - Character.def 
      const hpDiff = Character.hp -= dmg 
      
      Character.hp = hpDiff
      Character.def -= dmg
      
      if(dmg === 0) {
        console.log('Não foi causado dano.')
      } 

      if(Character.def <= 0) {
        console.log(`A defesa de ${Character.name} foi quebrada!`)
      }
  
      if(Character.hp <= 0) {
        console.log(`${Character.name} morreu.`)
      }
  }
}

