<template>
  <div>
    <input v-model="name" />
    <p>Result: {{ result }}</p>
    <button @click="submit">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const result = ref('')
async function submit() {
  const { body } = await $fetch('/api/submit', {
    method: 'post',
    body: { test: name.value }
  })
  result.value = body
}
</script>
