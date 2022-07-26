import { defineStore } from "pinia";
import { ref } from "vue";

interface Styles {
  "flex-direction"?: String;
  "justify-content"?: String;
  "align-items"?: String;
}

interface Level {
  id: number;
  position: Styles;
  counter: number;
  frogs: number;
  completed: boolean;
}

const levels: Level[] = [
  {
    id: 0,
    position: { "justify-content": "flex-end" },
    counter: 1,
    frogs: 1,
    completed: false,
  },
  {
    id: 1,
    position: { "justify-content": "center" },
    counter: 1,
    frogs: 2,
    completed: false,
  },
  {
    id: 2,
    position: { "justify-content": "space-around" },
    counter: 1,
    frogs: 3,
    completed: false,
  },
  {
    id: 3,
    position: { "justify-content": "space-between" },
    counter: 1,
    frogs: 3,
    completed: false,
  },
  {
    id: 4,
    position: { "align-items": "flex-end" },
    counter: 1,
    frogs: 3,
    completed: false,
  },
  {
    id: 5,
    position: { "justify-content": "center", "align-items": "center" },
    counter: 2,
    frogs: 1,
    completed: false,
  },
];

export const LevelsStore = defineStore({
  id: "LevelsStore",
  state: () => ({
    levels: levels,
    currentLevel: 0,
  }),
  getters: {
    getPosition: (state) => state.levels[state.currentLevel].position,
    getCurrentLevel: (state) => state.levels[state.currentLevel],
  },
  actions: {
    nextLevel() {
      if (this.currentLevel < levels.length - 1) this.currentLevel++;
    },
    previousLevel() {
      if (this.currentLevel > 0) this.currentLevel--;
    },
    verifyLevel(valueLevel: Level) {
      this.levels[valueLevel.id].completed = true;
    },
  },
});
