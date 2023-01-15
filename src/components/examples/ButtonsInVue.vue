<script setup>
  import { ref } from 'vue';

  const counter = ref(0)
  function count() {
    counter.value++
  }
</script>
<template>
  <button
    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
    @click="count"
  >
    Click to count {{counter}}
  </button>
</template>
