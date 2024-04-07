<script setup>
import {ref} from 'vue'

let total = ref(0)
let input = ref(1)
let error = ref("")

const increment = () => {
  const parsed = parseInt(input.value)
  if (!isNaN(parsed)) {
    total.value += parsed
    error.value = ""
  } else {
    error.value = 'input is not not a valid number'
  }
}

const decrement = () => {
  const parsed = parseInt(input.value)
  if (!isNaN(parsed)) {
    total.value -= parsed
  } else {
    error.value = ""
    error.value = 'input is not not a valid number'
  }
}

const reset = () => {
  total.value = 0
  input.value = 1
  error.value = ""
}
</script>

<template>
  <main>
    <div id="container">
      <h1>Count: {{ total }}</h1>
      <div id="inputs">
        <button @click="decrement">-</button>
        <input type="number" v-model="input">
        <button @click="increment">+</button>
      </div>
      <p class="error" v-if="error"> {{ error }}</p>
      <button @click="reset">Reset</button>
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
  width: fit-content;
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

.error {
  color: red;
  font-weight: bold;
  font-family: "Fira Code", Inconsolata, monospace;
}
</style>
