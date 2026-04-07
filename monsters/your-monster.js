// monsters/your-monster.js
// see dragon.js for a reference example

import { Monster } from '../monster.js';

export class YourMonster extends Monster { // rename class + file to your monster's name
  constructor() {
    // STAT BUDGET: health + attackPower * 3 must be ≤ 200
    super('YourMonster', 100, 15);
  }

  specialAbility(opponent) {
    return null;
  }
}
