import { Monster } from "../core/monster.js";
import { DamageAbility, HealAbility, ArmorAbility } from "../core/ability.js";

class PinkyCharm extends ArmorAbility {
  describe(attacker, amount) {
    const note =
      this.chargesMax !== Infinity ? ` (${this.chargesLeft} charges left)` : "";
    return `${attacker.name} reduces opponent's attack by ${amount}${note}!`;
  }
}

export class Pinky extends Monster {
  constructor() {
    super("Pinky", 210, 30, new PinkyCharm(20, 1));
  }

  get imagePath() {
    return "assets/monsters/Pinky.svg";
  }
}
