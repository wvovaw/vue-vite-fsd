<script setup lang="ts">
const a = ref(0);
const word = import.meta.env.VITE_SAMPLE_VAR;
</script>

<template>
  <div class="card">
    <h1>
      Vite + Vue + FSD starter
    </h1>
    <PButton @click="a++">
      {{ a }}
    </PButton>
    <p>
      word from .env: <i>{{ word }}</i>
    </p>
  </div>
</template>

<style scoped>
.card {
  background: #2a2a2a36;
  max-width: 500px;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}
</style>
