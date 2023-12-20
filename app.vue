<template>
  <div class="container p-5">
    <div class="text-center mb-5">
      <h1>Random Number Generator</h1>
      <p>This Demo is calling the
        <a href="https://platform.planqk.de/marketplace/apis/88b46e18-3d5f-4674-ba04-0d3416c0decd">Quantum Random Number
          Generator</a>
      </p>
    </div>
    <div class="mb-3">
      <label class="form-label">How many numbers should be generated?</label>
      <input type="number" class="form-control" v-model="count">
      <div class="form-text">The amount of numbers to be generated</div>
    </div>
    <button class="btn btn-primary" @click="submit" :disabled="isFetching">
      <div v-if="isFetching">
        <span role="status">Running...</span>
      </div>
      <span v-else>Submit</span>
    </button>
    <div class="mt-3" v-if="result && !isFetching">
      <label class="form-label">Result</label>
      <textarea class="form-control" rows="3" v-model="result"></textarea>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref('4')
const result = ref('')
const isFetching = ref(false)

async function submit() {
  isFetching.value = true
  try {
    const response = await $fetch('/api/submit', {
      method: 'post',
      body: { count: count.value }
    })
    result.value = JSON.stringify(response)
  } catch (e) {
    console.log(e)
  } finally {
    isFetching.value = false
  }
}

</script>
