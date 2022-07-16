<template>
  <div class="card__code__container">
    <div class="card__code__container__index">
      <code v-for="item in 10" :key="item" v-text="item" />
    </div>

    <div class="card__code__container__line">
      <code>#container {</code>
      <code>display: flex;</code>
      <textarea :rows="level.length" v-model="value"/>
      <code>}</code>

      <button>PRÓXIMO NÍVEL</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const level = [{ "justify-content": "center" }];
    const value = ref("");
    return { level, value };
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
  width: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-direction: column;
  padding: 8px 8px 8px 8px;
}
textarea{
    resize: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
}
button{
    width: fit-content;
    align-self: flex-end;
    align
}
</style>