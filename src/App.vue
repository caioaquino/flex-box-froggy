<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <teleport to="body">
    <vue3-snackbar bottom center :duration="4000"></vue3-snackbar>
  </teleport>
</template>
