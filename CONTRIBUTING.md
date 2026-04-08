# Contributing — Monster Arena

## For students

### 1. Create your monster file

Copy `src/monsters/your-monster.js` and rename it to your monster's class name (e.g. `Hydra.js`). Place it in `src/monsters/`.

### 2. Build your monster

Edit the file and implement your class. Rules:

- **Stat budget:** `health + attackPower × 3 ≤ 300`
- One optional ability (DamageAbility, HealAbility, or ArmorAbility)
- Add a 200×200 SVG image in `assets/monsters/` and set `get imagePath()`
- Run `node test.js` to verify your monster passes all checks before submitting

See `ABILITY_EXAMPLES.md` for ability ideas and budget guidance.

### 3. Submit a pull request

- Branch name: `monster/<your-monster-name>` (e.g. `monster/hydra`)
- PR title: `feat: add <MonsterName>`
- Include only your monster file and its image — do not modify `src/arena.js`, `src/ui.js`, `src/main.js`, or any core files

The instructor will review and merge your PR into the tournament roster.

---

## For the instructor

### Adding a submitted monster

1. Merge the student's PR
2. In `src/main.js`, add the import and a new instance to the `monsters` array
3. That's it — the tournament, leaderboard, and Monte Carlo update automatically
