<script setup>
  import { ref } from 'vue';

  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  const counter = ref(0)

  const count = () => {
    counter.value++
  }

  const notify = () => {
    toast.success("Notifyyyy (with Vue)!")
  }

</script>
<template>
  <button
    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
    @click="count"
  >
    Click to count {{counter}}
  </button>

  <button
    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
    @click="notify"
  >
    Click to show toast
  </button>
</template>
