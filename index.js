import { Character } from "./Character.js"
import { Mage } from "./Mage.js"
import { Thief } from "./Thief.js"
import { Warrior } from "./Warrior.js"

const superMan = new Thief('Superman', 150, 300, 150)
const spiderMan = new Character('Peter Parker', 150, 50, 100)
const Moira = new Mage('Moira', 100, 200, 50, 75)

const Kratos = new Warrior('Kratos', 100, 400, 150, 100, 'Attack')
Kratos.atkSomeone(superMan)
console.log(superMan)






