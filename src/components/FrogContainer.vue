<template>
  <div class="frog__container">
    <div class="frog" :style="frogPosition">
      <div
        class="frog__item"
        v-for="index in currentLevel.frogs"
        :key="index"
        ref="referenceFrog"
      >
        <Frog />
      </div>
    </div>
    <div class="water__lily" :style="position">
      <img
        v-for="index in currentLevel.frogs"
        :key="index"
        src="../assets/water-lily.png"
        width="128"
        height="128"
        ref="referenceWaterLily"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PositionStore } from "../stores/position";
import { computed } from "@vue/reactivity";
import { LevelsStore } from "../stores/levels";
import { default as Frog } from "./Frog.vue";
import { defineComponent } from "@vue/runtime-core";
import { ref, watch } from "vue";
export default defineComponent({
  components: { Frog },
  setup() {
    const referenceFrog = ref(null);
    const referenceWaterLily = ref(null);
    const levelsStore = LevelsStore();
    const positionStore = PositionStore();
    const currentLevel = computed(() => levelsStore.getCurrentLevel);
    const position: any = computed(() => levelsStore.getPosition);
    const frogPosition = computed(() => positionStore.getPosition);

    watch(
      currentLevel,
      () => {
        positionStore.saveReferenceFrog(referenceFrog);
        positionStore.saveReferenceLily(referenceWaterLily);
      },
      { immediate: true }
    );

    return {
      position,
      currentLevel,
      frogPosition,
      referenceFrog,
      referenceWaterLily,
    };
  },
});
</script>

<style scoped>
.frog__container {
  background-color: #bf98a0;
  padding: 0 16px;
}
.water__lily {
  display: flex;
  gap: 16px;
  height: 100%;
}

.frog {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  z-index: 9;
  padding: 8px 16px;
  gap: 16px;
}
.frog__item {
  width: 128px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
}
</style>
