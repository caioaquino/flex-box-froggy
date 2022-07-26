<template>
  <div class="card__code__container">
    <div class="card__code__container__index">
      <code v-for="item in 10" :key="item" v-text="item" />
    </div>
    <div class="card__code__container__line">
      <div class="card__code__container__line__code">
        <code>#container {</code>
        <code>display: flex;</code>
        <textarea
          :rows="levels[currentLevel].counter"
          v-model="position"
          @input="handleCodeInput"
        />
        <code>}</code>
      </div>
      <div class="actions">
        <button @click="handleNextLevel()">PRÓXIMO NÍVEL</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { LevelsStore } from "../stores/levels";
import { PositionStore } from "../stores/position";

export default defineComponent({
  setup() {
    const levelsStore = LevelsStore();
    const positionStore = PositionStore();
    const { position } = storeToRefs(positionStore);
    const { levels, currentLevel } = storeToRefs(levelsStore);

    function handleNextLevel() {
      const referencesLily = positionStore.referenceLily;
      const referencesFrog = positionStore.referenceFrog;

      for (var j = 0; j < referencesLily.length; j++) {
        if (
          referencesLily[j].getBoundingClientRect().y !==
            referencesFrog[j].getBoundingClientRect().y - 8 ||
          referencesLily[j].getBoundingClientRect().x !==
            referencesFrog[j].getBoundingClientRect().x
        ) {
          return;
        }

        levelsStore.nextLevel();
        positionStore.resetPosition();
      }
    }
    const referenceFrog = inject("referenceFrog");
    function handleCodeInput() {
      console.log(referenceFrog);
    }

    return {
      levels,
      currentLevel,
      handleNextLevel,
      handleCodeInput,
      position,
    };
  },
});
</script>

<style scoped>
.card__code__container {
  background-color: #d9d0de;
  height: 256px;
  border-radius: 4px;
  margin: 32px 0px 0px 30px;
  display: flex;
}
.card__code__container__index {
  padding: 8px 0px 8px 0px;
  background-color: #bc8da0;
  display: flex;
  flex-direction: column;
  width: 24px;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.card__code__container__line {
  display: flex;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  padding: 8px;
  justify-content: space-between;
  flex-direction: column;
}
.card__code__container__line__code {
  display: flex;
  flex-direction: column;
  width: 100%;
}

textarea {
  resize: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  line-height: 21px;
}
.actions {
  display: flex;
  width: 100%;
  align-self: flex-end;
  justify-content: flex-end;
}
.actions button {
  background-color: #bc8da0;
  color: white;
  padding: 8px 16px 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.actions button:focus {
  border: 1px solid #895c6e;
}
</style>
