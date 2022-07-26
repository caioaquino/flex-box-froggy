<template>
  <div class="card__code__container" :class="{ shake: disabled }">
    <div class="card__code__container__index">
      <code v-for="item in 10" :key="item" v-text="item" />
    </div>
    <div class="card__code__container__line">
      <div class="card__code__container__line__code">
        <code>#container {</code>
        <code>display: flex;</code>
        <textarea :rows="levels[currentLevel].counter" v-model="position" />
        <code>}</code>
      </div>
      <div class="actions">
        <button
          class="next__level__button"
          v-on:click="handleNextLevel()"
          v-if="!current.completed"
        >
          PRÓXIMO NÍVEL
        </button> 
        <button class="success__button" v-else>NÍVEL CONCLUÍDO!</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { LevelsStore } from "../stores/levels";
import { PositionStore } from "../stores/position";
import { useSnackbar } from "vue3-snackbar";

export default defineComponent({
  setup() {
    const levelsStore = LevelsStore();
    const positionStore = PositionStore();
    const { position } = storeToRefs(positionStore);
    const { levels, currentLevel } = storeToRefs(levelsStore);

    const snackbar = useSnackbar();
    const current = computed(() => levelsStore.getCurrentLevel);

    function handleNextLevel() {
      const referencesLily = positionStore.referenceLily;
      const referencesFrog = positionStore.referenceFrog;

      for (var j = 0; j < referencesLily.length; j++) {
        if (!current.value.completed) {
          if (
            referencesLily[j].getBoundingClientRect().y !==
              referencesFrog[j].getBoundingClientRect().y - 8 ||
            referencesLily[j].getBoundingClientRect().x !==
              referencesFrog[j].getBoundingClientRect().x
          ) {
            snackbar.add({
              type: "error",
              text: "A posição do sapo está incorreta!",
            });
            return;
          }
        }
      }

      snackbar.add({
        type: "success",
        text: `Parabéns! Você concluiu o nível ${currentLevel.value + 1}`,
      });
      console.log("oi");
      levelsStore.verifyLevel(current.value);
      levelsStore.nextLevel();
      positionStore.resetPosition();
    }

    return {
      levels,
      currentLevel,
      handleNextLevel,
      position,
      current,
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
.actions .next__level__button {
  background-color: #bc8da0;
  color: white;
  padding: 8px 16px 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.actions .next__level__button:focus {
  border: 1px solid #895c6e;
}

.actions .success__button {
  background-color: #15e096;
  color: white;
  padding: 8px 16px 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
