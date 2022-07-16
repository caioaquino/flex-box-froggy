<template>
  <lottie-animation path="../src/assets/frog.json" :width="100" :height="100" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { default as LottieAnimation } from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
export default defineComponent({
  components: {
    LottieAnimation,
  },
});
</script>

<style>
</style>