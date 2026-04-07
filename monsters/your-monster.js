// monsters/your-monster.js
//
// ── YOUR STARTING POINT ──
//
// Instructions:
//   1. Copy this file and rename it after your monster  (e.g. Hydra.js)
//   2. Rename the class from YourMonster to your monster's name
//   3. Fill in the TODOs below
//   4. Add an image to assets/monsters/ named exactly after your class
//      (e.g. assets/monsters/Hydra.png)
//   5. Open a Pull Request — the teacher will import you into the arena!

import { Monster } from '../monster.js';

// TODO 1: Rename this class to your monster's name.
// Why: The class name is used to look up your monster's image file,
// and it appears in the arena leaderboard. Pick something memorable!
export class YourMonster extends Monster {
  constructor() {
    // TODO 2: Replace the three arguments inside super() with your own values.
    //   - Argument 1: A name string  (e.g. 'Hydra')
    //   - Argument 2: Health points  (suggested range: 80–150)
    //   - Argument 3: Attack power   (suggested range: 10–25)
    //
    // Why: Higher HP means you survive longer. Higher attack means you hit harder.
    // You can't max both — pick a strategy!
    super('YourMonster', 100, 15);

    // TODO 3 (optional): Add any extra properties your special ability needs.
    // Examples:
    //   this.venomStacks = 0;   // track a poison counter
    //   this.shieldActive = false;
  }

  /**
   * TODO 4: Override this method with your monster's special ability.
   *
   * This method is called automatically after every normal attack.
   * Use it to do something creative — bonus damage, healing, debuffs…
   *
   * Rules:
   *   - You can call opponent.takeDamage(amount) to deal bonus damage
   *   - You can call this.hp.heal(amount) to restore your own HP
   *   - You can modify opponent.attackPower to weaken them
   *   - Return a string describing what happened (shown in the arena log)
   *   - Return null if the ability didn't trigger this turn
   *
   * Why return a string? The arena displays it as a battle log entry.
   *
   * @param {Monster} opponent  The monster you're currently fighting.
   * @returns {string|null}
   */
  specialAbility(opponent) {
    // TODO 4: Replace this comment with your ability logic.
    // Example (delete this and write your own!):
    //
    //   const bonusDamage = 10;
    //   opponent.takeDamage(bonusDamage);
    //   return `⚡ YourMonster zaps for ${bonusDamage} bonus damage!`;

    return null; // remove this line once you've written your ability
  }

  // TODO 5 (optional): If your special ability uses a resource that resets
  // between fights (like Dragon's fireCharges), override reset() like this:
  //
  //   reset() {
  //     super.reset(); // ALWAYS call this — it resets HP!
  //     this.myResource = startingValue;
  //   }
}
