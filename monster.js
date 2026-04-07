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
   * @param {number} health       Starting (and max) hit points.
   * @param {number} attackPower  Damage dealt per normal attack.
   */
  constructor(name, health, attackPower) {
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
   * 1. Deals attackPower damage.
   * 2. Then triggers our special ability (if any).
   *
   * @param {Monster} opponent  The monster being attacked.
   * @returns {{ damage: number, special: boolean }}
   */
  attack(opponent) {
    opponent.takeDamage(this.attackPower);
    const usedSpecial = this.specialAbility(opponent);
    return { damage: this.attackPower, special: !!usedSpecial };
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
