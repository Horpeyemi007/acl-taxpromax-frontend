<template>
  <transition name="fade">
    <div v-if="message" class="text-sm text-red-400 flex items-center gap-1 mt-1">
      <svg
        class="w-4 h-4 text-red-400"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
defineProps({ message: String });
</script>
