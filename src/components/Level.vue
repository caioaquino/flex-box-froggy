<template>
  <div class="level__selector">
    <div class="left__button" @click="handlePreviousLevel()">
      <i class="arrow left" />
    </div>
    <div class="level__selector__title">
      Nível {{ currentLevel + 1 }} de {{ levels.length }}
    </div>

    <div class="right__button" @click="handleNextLevel()">
      <i class="arrow right" />
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { LevelsStore } from "../stores/levels";
import { PositionStore } from "../stores/position";

export default {
  setup() {
    const levelsStore = LevelsStore();
    const { levels, currentLevel } = storeToRefs(levelsStore);
    const positionStore = PositionStore();
    function handleNextLevel() {
      levelsStore.nextLevel();
      positionStore.resetPosition();
    }
    function handlePreviousLevel() {
      levelsStore.previousLevel();
      positionStore.resetPosition();
    }
    return { levels, currentLevel, handleNextLevel, handlePreviousLevel };
  },
};
</script>

<style scoped>
.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.level__selector__title {
  display: inline;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
}

.level__selector {
  background-color: #bf98a0;
  border-radius: 4px;
  height: fit-content;
  display: flex;
  align-items: center;
}
.left__button {
  cursor: pointer;
  background-color: #94757b;
  opacity: 0.7;
  padding: 4px 8px 4px 12px;
}
.right__button {
  cursor: pointer;
  background-color: #94757b;
  opacity: 0.7;
  padding: 4px 12px 4px 8px;
}
</style>
