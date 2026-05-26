<script setup>
import RestaurantRow from './RestaurantRow.vue'

const props = defineProps({
  restaurants: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['action'])
</script>

<template>
  <table class="w-full border-collapse">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 text-left">ID</th>
        <th class="px-4 py-2 text-left">음식점명</th>
        <th class="px-4 py-2 text-left">카테고리</th>
        <th class="px-4 py-2 text-left">평점</th>
        <th class="px-4 py-2 text-left">주소</th>
        <th class="px-4 py-2 text-left">액션</th>
      </tr>
    </thead>
    <tbody>
      <RestaurantRow
        v-for="item in props.restaurants"
        :key="item.id"
        :restaurant="item"
        @action="emit('action', $event)"
      />
    </tbody>
  </table>
</template>