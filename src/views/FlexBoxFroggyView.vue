<template>
  <div class="container">
    <div class="card__code">
      <div class="card__code__header">
        <h1 class="card__code__title">FLEXBOX FROGGY</h1>
        <Level />
      </div>
      <div class="card__code__instructions">
        <p>
          Bem vindo ao Flexbox Froggy! O objetivo do jogo é salvar os sapos ao
          escrever códigos em CSS utilizando Flexbox! Para jogar, lembre que
          você deve usar as seguintes propriedades:
        </p>
        <ul>
          <li>
            <code>justify-content:</code> determina o espaçamento entre os itens
          </li>
          <li><code>align-items:</code> alinha itens verticalmente</li>
          <li><code>flex-direction:</code> define a direção dos itens</li>
        </ul>
      </div>

      <CodeContainer />
    </div>
    <FrogContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import FrogContainer from "../components/FrogContainer.vue";
import CodeContainer from "../components/CodeContainer.vue";
import Level from "../components/Level.vue";
export default defineComponent({
  components: { CodeContainer, FrogContainer, Level },
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: 100vh;
  font-family: "Montserrat";
}
.card__code {
  background-color: #312f2f;
  color: white;
  padding: 32px;
}
.card__code__instructions {
  margin-top: 16px;
}

.card__code__title {
  font-family: "Evogria";
}
p {
  text-align: justify;
}
code {
  background-color: rgb(191, 152, 160, 0.9);
  color: white;
  font-weight: bold;
}
ul {
  margin-top: 16px;
}

.card__code__header {
  display: flex;
  justify-content: space-between;
}
</style>
