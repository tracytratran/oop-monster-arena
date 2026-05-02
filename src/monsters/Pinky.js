// monsters/your-monster.js
// see dragon.js for a reference example

import { Monster } from "../core/monster.js";
import { DamageAbility, HealAbility, ArmorAbility } from "../core/ability.js";

// ── Step 1: write your ability ────────────────────────────────────────────────
// Extend one of the three base types. Override activate() and describe().
//
//   triggerChance = budget / amount   (higher amount = rarer trigger)
//   DamageAbility budget: 15   HealAbility budget: 12   ArmorAbility budget: 8

class PinkyCharm extends ArmorAbility {
  // swap DamageAbility → HealAbility or ArmorAbility if you want a different effect
  describe(attacker, amount) {
    const note =
      this.chargesMax !== Infinity ? ` (${this.chargesLeft} charges left)` : "";
    return `${attacker.name} reduces opponent's attack by ${amount}${note}!`;
  }
}

// ── Step 2: write your monster ────────────────────────────────────────────────

export class Pinky extends Monster {
  // rename class + file to your monster's name (case-sensitive!)
  constructor() {
    // STAT BUDGET: health + attackPower * 3 must be ≤ 300
    super("Pinky", 210, 30, new PinkyCharm(20, 1));
    // pre-create extra abilities here if you want to swap in onTakeDamage:
    // this._secondAbility = new HealAbility(15);
  }

  // onTakeDamage(amount) {
  //   this.hitsTaken++; // track state, read in activate()
  //   this.ability = this._secondAbility; // swap ability
  // }

  // reset() {
  //   super.reset();                  // restores original ability + charges
  //   this._secondAbility.reset();    // reset swapped ability charges too
  //   this.hitsTaken = 0;
  // }

  get imagePath() {
    return "assets/monsters/Pinky.svg";
  }
}
