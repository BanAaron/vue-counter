<script setup>
import {ref} from 'vue'

const total = ref(0)
const input = ref(1)
const error = ref("")

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
    error.value = ""
  } else {
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
      <h1>Count: {{ total.toLocaleString() }}</h1>
      <div id="inputs">
        <Button @click="decrement">-</Button>
        <InputNumber type="number" v-model="input"/>
        <Button @click="increment">+</Button>
      </div>
      <p class="error" v-if="error"> {{ error }}</p>
      <Button @click="reset">Reset</Button>
    </div>
  </main>
</template>

<style scoped lang="scss">
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
