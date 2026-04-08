// index.js
//
// Entry point — import all monster classes and kick off the tournament.
//
// ── INSTRUCTOR: ADD NEW MONSTER IMPORTS HERE ──
// When a student group submits their PR, add one line below.
// Pattern: import { ClassName } from './monsters/ClassName.js';

import { Dragon } from './monsters/Dragon.js';
import { Goblin } from './monsters/Goblin.js';
import { Troll } from './monsters/Troll.js';
// ↑ Add more imports here as groups submit their PRs

// ── ──────────────────────────────────────────── ──

import { tournament, cancelTournament, monteCarlo } from './arena.js';
import './ui.js';         // registers all DOM event listeners
import './style.css';

// ── INSTRUCTOR: ADD YOUR MONSTER INSTANCES HERE ──
// After adding the import above, add a new instance to this array.
const monsters = [
  new Dragon(),
  new Goblin(),
  new Troll()
  // new Hydra(),   ← example of what to add
];

// Populate the start screen roster, then run Monte Carlo in the background.
document.dispatchEvent(new CustomEvent('arena:roster', {
  detail: monsters.map(m => m.name),
}));

setTimeout(() => {
  const results = monteCarlo(monsters, 1000);
  document.dispatchEvent(new CustomEvent('arena:montecarlo', { detail: results }));
}, 0);

window.startTournament = () => {
  cancelTournament();
  tournament(monsters);
};
