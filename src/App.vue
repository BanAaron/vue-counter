<script setup>
import {ref} from 'vue'

let total = ref(0)
let inputNum = ref(1)

const increment = () => {
  const parsed = parseInt(inputNum.value)
  if (!isNaN(parsed)) {
    total.value += parsed
  }
}

const decrement = () => {
  const parsed = parseInt(inputNum.value)
  if (!isNaN(parsed)) {
    total.value -= parsed
  }
}
</script>

<template>
  <main>
    <div id="container">
      <h1>Count: {{ total }}</h1>
      <div id="inputs">
        <button @click="decrement">-</button>
        <input type="number" v-model="inputNum">
        <button @click="increment">+</button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: black;
  color: aliceblue;
}

#container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-family: Inter, system-ui, serif;
    text-align: center;
  }
}

#inputs {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button, input {
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    justify-content: center;
  }
}
</style>
