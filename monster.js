// monster.js
//
// Monster is the BASE CLASS — every monster in the arena extends this.
// It uses COMPOSITION: instead of managing HP directly, it delegates
// to a HealthComponent object stored in this.hp.
//
// Students: read this file, then look at monsters/dragon.js for a
// full example of how to extend it.

import { HealthComponent } from './health.js';

export class Monster {
  /**
   * @param {string} name         Display name shown in the arena.
   * @param {number} health       Starting (and max) hit points.  (min 10)
   * @param {number} attackPower  Damage dealt per normal attack. (min 1)
   *
   * Stat budget: health + attackPower * 3 must be ≤ 200.
   * Example: 120 HP + 18 atk × 3 = 174 ✓   |   9999 HP + 1 atk = 10002 ✗
   */
  constructor(name, health, attackPower) {
    // ── Stat constraints ──
    if (attackPower < 1) {
      throw new Error(`[Monster] "${name}": attackPower must be ≥ 1`);
    }
    if (health < 10) {
      throw new Error(`[Monster] "${name}": health must be ≥ 10`);
    }
    const score = health + attackPower * 3;
    if (score > 200) {
      throw new Error(
        `[Monster] "${name}" exceeds the stat budget!\n` +
        `  Score: ${health} HP + ${attackPower} attack × 3 = ${score}  (max 200)\n` +
        `  Reduce your stats by ${score - 200} point(s).\n` +
        `  Tip: each attack point costs 3 budget points; each HP costs 1.`
      );
    }

    this.name        = name;
    this.attackPower = attackPower;

    // COMPOSITION: we don't manage HP ourselves — we delegate to HealthComponent.
    // this.hp is an object that knows everything about health.
    this.hp = new HealthComponent(health);
  }

  // ── Delegating getters — thin wrappers over HealthComponent ──

  /** Current HP (read-only). */
  get health() { return this.hp.current; }

  /** Is this monster still in the fight? */
  isAlive() { return this.hp.isAlive(); }

  // ── Combat methods ──

  /**
   * Take damage from an attack.
   * Delegates to HealthComponent — Monster doesn't need to know the math.
   * @param {number} amount
   */
  takeDamage(amount) {
    this.hp.takeDamage(amount);
  }

  /**
   * Attack an opponent.
   * 1. Deals attackPower damage (±15% variance — combat isn't perfectly predictable).
   * 2. Then triggers our special ability (if any).
   *
   * @param {Monster} opponent  The monster being attacked.
   * @returns {{ damage: number, special: string|null }}
   */
  attack(opponent) {
    // ±15% variance makes every fight feel different even with identical stats
    const actualDamage = Math.max(1, Math.round(this.attackPower * (0.85 + Math.random() * 0.30)));
    opponent.takeDamage(actualDamage);
    const usedSpecial = this.specialAbility(opponent);
    // Return the actual damage and the special ability description (or null).
    return { damage: actualDamage, special: usedSpecial };
  }

  /**
   * Special ability — does NOTHING by default.
   * Subclasses should OVERRIDE this method to add something creative.
   *
   * Ideas: deal bonus damage, heal yourself, lower the opponent's attack…
   *
   * @param {Monster} opponent  The current opponent (you can affect them too!).
   * @returns {string|null}  Return a description string if the ability fired, null otherwise.
   */
  // eslint-disable-next-line no-unused-vars
  specialAbility(opponent) {
    return null; // base class does nothing — subclasses override this
  }

  /**
   * Reset HP to full. Called automatically between every bout.
   * You don't need to call this yourself.
   */
  reset() {
    this.hp.reset();
  }

  /**
   * Path to this monster's image.
   * Convention: place a .png in assets/monsters/ named exactly after your class
   * (e.g. Dragon.png, Hydra.png). If you use a different format (.jpg, .svg, .webp),
   * override this getter in your subclass to return the correct path.
   */
  get imagePath() {
    return `assets/monsters/${this.constructor.name}.png`;
  }
}
