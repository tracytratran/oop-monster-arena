# Monster Arena ⚔️

A live-coded OOP tournament for your coding bootcamp.

Each team builds a custom monster. At the end of the session, **all monsters fight in a round-robin tournament** — every monster vs every other monster, once. The arena animates each battle in real time in the browser.

---

## What you'll build

A JavaScript class that extends `Monster`. Your monster has:
- A **name**, **health points**, and **attack power** (you choose the numbers)
- A **special ability** — something creative that fires after each normal attack

The base `Monster` class uses a `HealthComponent` for HP management — this is an example of **composition** (has-a relationship). Your subclass is an example of **inheritance** (is-a relationship). You'll see both OOP patterns in action.

---

## Your workflow

### 1. Fork this repo
Click **Fork** in the top-right corner of GitHub. This gives you your own copy to work in.

### 2. Copy the template

```bash
cp monsters/your-monster.js monsters/YourMonsterName.js
```

Open the new file and follow the `TODO` comments step by step.

### 3. Add your monster's image

- Find or generate an image for your monster (Google Images, DALL·E, Midjourney…)
- The filename **must exactly match your class name** (case-sensitive!)
- If your image is a **PNG**: save it as `assets/monsters/YourMonsterName.png` — done!
- If your image is a **JPG or other format**: save it with the right extension, then add this to your class:
  ```js
  get imagePath() { return 'assets/monsters/YourMonsterName.jpg'; }
  ```

### 4. Open a Pull Request

Push your branch and open a PR to the instructor's repo. Your monster will be imported into the arena before the tournament starts.

---

## Quick reference: Monster API

| What you write | What it does |
|---|---|
| `super('Name', health, attack)` | Sets your monster's stats |
| Override `specialAbility(opponent)` | Your monster's unique power |
| `opponent.takeDamage(amount)` | Deal bonus damage to opponent |
| `this.hp.heal(amount)` | Restore your own HP |
| `opponent.attackPower -= 5` | Weaken the opponent (don't go below 1!) |
| `this.health` | Read your current HP |
| `this.name` | Your monster's name (use it in log strings) |
| Return a string | Arena logs it during the fight |
| Return `null` | Ability didn't trigger this turn |

---

## Study guide

| File | Read it? | Edit it? |
|---|---|---|
| `health.js` | ✅ Yes — see how **composition** works | ❌ No |
| `monster.js` | ✅ Yes — understand the base class | ❌ No |
| `monsters/dragon.js` | ✅ Yes — your **reference example** | ❌ No |
| `monsters/your-monster.js` | ✅ Yes | ✅ **This is your file** |
| `arena.js` | Optional | ❌ No |
| `ui.js` | Optional | ❌ No |

---

## Running the tournament (instructor only)

```bash
npm install
npm run dev
```

Open the URL shown in the terminal. As student PRs are merged, add each group's import to `index.js`:

```js
// index.js — two steps per group:
// Step 1: add an import at the top (filename must match class name exactly)
import { Hydra }    from './monsters/Hydra.js';
import { Werewolf } from './monsters/Werewolf.js';

// Step 2: add a new instance to the array
const monsters = [
  new Dragon(),
  new Hydra(),
  new Werewolf(),
];
```

Vite hot-reloads automatically — save `index.js` and the browser updates instantly.

---

## Student PR checklist

- [ ] Copied and renamed `your-monster.js`
- [ ] Renamed the class to match the filename (case-sensitive!)
- [ ] Called `super()` with a name, health, and attack power
- [ ] Overrode `specialAbility()` with something creative
- [ ] Added an image to `assets/monsters/` (exact class name as filename)
- [ ] Opened a PR 🎉
