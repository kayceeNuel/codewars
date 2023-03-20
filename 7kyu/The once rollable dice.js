/** 
 * In my simple RPG, every character will be created with the object-constructor: Character.

var balthazaar = new Character('Balthazaar', 20);
                        // Balthazaar will be his name
                        // 20 will be his opness (as Over-Poweredness)
I did the best of my haxxing magic, but it seems I've got problems:

After creating him, my poor little hero's attacks seems to miss the magic of randomness. (The first fight with that stupid rat didn't go too well...)
 */

//BUG 
/*function Character(name, opness) {
    this.name = name;
    this.opness = 20;
    this.attack = opness + ~~(Math.random()*20)+1;
}*/

//SOLUTION
function Character(name, opness) {
    this.name = name;
    this.opness = opness;
    this.attack = function() {
      return this.opness + Math.floor(Math.random() * 20) + 1;
    };
  }