<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalPages: Number
})

const emit = defineEmits(['change'])

const visiblePages = computed(() => {
  const start = Math.floor(props.currentPage / 10) * 10
  const end = Math.min(start + 10, props.totalPages)
  return Array.from({ length: end - start }, (_, i) => start + i + 1)
})

const pageClass = (page) => {
  return (page - 1) === props.currentPage
    ? 'px-3 py-1 rounded cursor-pointer bg-green-500 text-white'
    : 'px-3 py-1 rounded cursor-pointer bg-gray-200 hover:bg-green-100'
}
</script>

<template>
  <div class="flex gap-2 justify-center mt-4 items-center">
    <template v-if="totalPages >= 10">
      <button @click="emit('change', 0)" class="px-3 py-1 rounded cursor-pointer bg-gray-200 hover:bg-green-100">&lt;&lt;</button>
      <button @click="emit('change', Math.max(0, currentPage - 1))" class="px-3 py-1 rounded cursor-pointer bg-gray-200 hover:bg-green-100">&lt;</button>
    </template>
    <button
      v-for="page in visiblePages"
      :key="page"
      @click="emit('change', page - 1)"
      :class="pageClass(page)"
    >
      {{ page }}
    </button>
    <template v-if="totalPages >= 10">
      <button @click="emit('change', Math.min(totalPages - 1, currentPage + 1))" class="px-3 py-1 rounded cursor-pointer bg-gray-200 hover:bg-green-100">&gt;</button>
      <button @click="emit('change', totalPages - 1)" class="px-3 py-1 rounded cursor-pointer bg-gray-200 hover:bg-green-100">&gt;&gt;</button>
    </template>
  </div>
</template>
