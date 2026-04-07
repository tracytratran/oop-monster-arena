// monsters/dragon.js
//
// ── REFERENCE EXAMPLE ──
// Read this file to understand how to build your own monster.
// Don't copy it blindly — your monster should be original!
//
// What to notice:
//   1. We extend Monster (INHERITANCE — Dragon IS-A Monster)
//   2. We call super() with our chosen stats
//   3. We override specialAbility() with something creative
//   4. We return a string from specialAbility() so the arena can log it

import { Monster } from '../monster.js';

export class Dragon extends Monster {
  constructor() {
    // super() calls Monster's constructor.
    // Arguments: name, health, attackPower
    // Tune these to balance your monster in the tournament!
    super('Dragon', 120, 18);

    // You can add extra properties specific to your monster.
    this.fireCharges = 3; // Dragon has 3 fire breath charges
  }

  /**
   * Special ability: Fire Breath
   * Deals massive bonus damage — but only 3 times per fight.
   *
   * @param {Monster} opponent
   * @returns {string|null}
   */
  specialAbility(opponent) {
    if (this.fireCharges <= 0) return null; // ability exhausted

    const bonusDamage = 25;
    opponent.takeDamage(bonusDamage);
    this.fireCharges--;

    return `🔥 Dragon breathes fire for ${bonusDamage} bonus damage! (${this.fireCharges} charges left)`;
  }

  // reset() is inherited from Monster and resets HP.
  // If your special ability has a resource (like fireCharges),
  // override reset() and call super.reset() to also reset your resource.
  reset() {
    super.reset(); // always call this first — resets HP via HealthComponent
    this.fireCharges = 3;
  }

  // Dragon uses an SVG image — override imagePath to point to it.
  get imagePath() {
    return 'assets/monsters/Dragon.svg';
  }
}
