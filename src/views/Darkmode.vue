<template>
  <div>
    <div class="flex space-x-4">
      <div @click="toggle">Normal</div>
      <div @click="toggle('dark')">Dark</div>
    </div>

    <div class="bg-slate-100 p-10 dark:bg-black dark:text-white">
      You see the change!
    </div>
  </div>
</template>

<script setup>
  var toggle = (mode) => {
    if (mode === 'dark') {
      console.log('Entered dark')
      document.documentElement.classList.add('dark')
    } else {
      console.log('Entered default')
      document.documentElement.classList.remove('dark')
    }
  }
</script>