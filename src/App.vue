<script setup>
import { ref, watch } from 'vue'

const regionDivisionMap = {
  'London' : ['London 1', 'London 2'],
  'West' : ['West 1', 'West 2']
}

const selectedRegions = ref([])
const selectedDivisions = ref([])
const regions = ref(Object.keys(regionDivisionMap).sort())
let filteredDivisions = [].concat(...Object.values(regionDivisionMap)).sort()

watch(()=>selectedRegions.value, ()=>{
  // if there is no region selected we want to make sure all divisions are available
  if (selectedRegions.value.length === 0) {
    filteredDivisions = [].concat(...Object.values(regionDivisionMap)).sort()
  }

  const cachedSelectedDivisions = selectedDivisions.value
  selectedDivisions.value = []
  filteredDivisions = []
  for (const region of selectedRegions.value) {
    if (regionDivisionMap[region]) {
      filteredDivisions.push(...regionDivisionMap[region])
    }
  }
  for (const division of cachedSelectedDivisions) {
    for (const region of selectedRegions.value) {
      if (regionDivisionMap[region].includes(division)) {
        selectedDivisions.value.push(division)
      }
    }
  }

  filteredDivisions.sort()
})

const onHide = ()=>{
  console.log("onHide")
  console.log(selectedRegions.value)
  console.log(selectedDivisions.value)
}
</script>

<template>
  <main>
    <div id="container">
      <h1>region</h1>
      <MultiSelect v-model="selectedRegions" :options="regions" @hide="onHide"/>
      <h1>division</h1>
      <MultiSelect v-model="selectedDivisions" :options="filteredDivisions" @hide="onHide"/>
    </div>
  </main>
</template>

<style scoped lang="scss">
#container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
