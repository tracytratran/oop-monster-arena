// index.js
//
// Entry point — import all monster classes and kick off the tournament.
//
// ── INSTRUCTOR: ADD NEW MONSTER IMPORTS HERE ──
// When a student group submits their PR, add one line below.
// Pattern: import { ClassName } from './monsters/ClassName.js';

import { Dragon } from './monsters/dragon.js';
// ↑ Add more imports here as groups submit their PRs

// ── ──────────────────────────────────────────── ──

import { tournament } from './arena.js';
import './ui.js'; // registers all DOM event listeners

// ── INSTRUCTOR: ADD YOUR MONSTER INSTANCES HERE ──
// After adding the import above, add a new instance to this array.
const monsters = [
  new Dragon(),
  // new Hydra(),   ← example of what to add
];

tournament(monsters);
