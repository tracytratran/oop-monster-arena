// health.js
//
// HealthComponent manages a monster's hit points.
// This is an example of COMPOSITION — instead of putting all health
// logic inside Monster, we give Monster a separate object that handles it.
// Benefit: HealthComponent can be reused, tested, and understood on its own.

export class HealthComponent {
  /**
   * @param {number} maxHealth  The maximum (and starting) HP value.
   */
  constructor(maxHealth) {
    if (typeof maxHealth !== 'number' || maxHealth < 0) {
      throw new Error(`HealthComponent: maxHealth must be a non-negative number, got ${maxHealth}`);
    }
    this._max     = maxHealth;  // never changes — the ceiling
    this._current = maxHealth;  // changes as damage/healing happens
  }

  // ── Getters (read-only access — callers can read but not accidentally overwrite) ──

  /** Current HP. */
  get current() { return this._current; }

  /** Maximum HP. */
  get max() { return this._max; }

  /**
   * HP as a percentage 0–100.
   * The arena UI uses this to set health bar widths.
   */
  get percentage() {
    if (this._max === 0) return 0;
    return Math.round((this._current / this._max) * 100);
  }

  // ── Methods ──

  /**
   * Reduce HP by `amount`. HP never goes below 0.
   * @param {number} amount
   */
  takeDamage(amount) {
    this._current = Math.max(0, this._current - amount);
  }

  /**
   * Restore HP by `amount`. HP never exceeds its maximum.
   * Useful for heal-based special abilities.
   * @param {number} amount
   */
  heal(amount) {
    this._current = Math.min(this._max, this._current + amount);
  }

  /** Returns true while the monster still has HP left. */
  isAlive() {
    return this._current > 0;
  }

  /** Fully restores HP to maximum — useful when a monster starts a new bout. */
  reset() {
    this._current = this._max;
  }
}
