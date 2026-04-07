// monsters/your-monster.js
//
// ── YOUR STARTING POINT ──
//
// Instructions (2 are optional — marked below):
//   1. Copy this file and rename it after your monster  (e.g. Hydra.js)
//   2. Rename the class from YourMonster to your monster's name  ← see TODO 1
//   3. Fill in the TODOs below
//   4. Add an image to assets/monsters/ named exactly after your class  ← see TODO 1
//      (e.g. assets/monsters/Hydra.png)
//   5. Open a Pull Request — the teacher will import you into the arena!

import { Monster } from '../monster.js';

// TODO 1: Rename 'YourMonster' (in the line below) to your monster's name.
//         Also add an image: assets/monsters/<YourMonsterName>.png
// Why: The class name drives two things — the arena leaderboard entry and the
//      image lookup. The image filename MUST match the class name exactly.
export class YourMonster extends Monster { // ← change 'YourMonster' here
  constructor() {
    // TODO 2: Replace the three arguments inside super() with your own values.
    //   - Argument 1: A name string  (e.g. 'Hydra')
    //   - Argument 2: Health points  (suggested range: 80–150)
    //   - Argument 3: Attack power   (suggested range: 10–25)
    //
    // Why: Higher HP means you survive longer. Higher attack means you hit harder.
    // You can't max both — pick a strategy! For reference, Dragon uses 120 HP
    // and 18 attack — near the top of both. A glass cannon might use 80 HP / 25 attack.
    super('YourMonster', 100, 15);

    // TODO 3 (optional): Add any extra properties your special ability needs.
    // Examples (similar to Dragon's this.fireCharges):
    //   this.chargeCount = 3;   // track how many times the ability can fire
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
   * Why return a string? The arena displays it as a live battle log entry.
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
    //   this.hp.heal(5);  // optional: also heal yourself a little
    //   return `⚡ ${this.name} zaps for ${bonusDamage} and heals 5!`;

    return null; // remove this line once you've written your ability
  }

  // TODO 5 (optional): If your special ability uses a resource that resets
  // between fights (like Dragon's fireCharges), override reset() like this:
  //
  //   reset() {
  //     super.reset(); // ALWAYS call this first — it resets HP!
  //     this.myResource = startingValue;
  //   }
}
