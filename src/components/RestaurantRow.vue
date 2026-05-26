<script setup>
const props = defineProps({
  restaurant: Object
})

const emit = defineEmits(['action'])

/** methods */
const clickedBtn = ((id, flag)=>{
  emit('action', {id, flag})
})

</script>

<template>
  <tr>
    <td class="px-4 py-2">{{ props.restaurant.id }}</td>
    <td class="px-4 py-2">{{ props.restaurant.name }}</td>
    <td class="px-4 py-2">{{ props.restaurant.category }}</td>
    <td class="px-4 py-2">{{ props.restaurant.googleRating }}</td>
    <td class="px-4 py-2">{{ props.restaurant.address }}</td>
    <td class="px-4 py-2 flex gap-2">
      <button
      @click="clickedBtn(props.restaurant.id, 'approve')" 
      class="px-3 py-1 bg-green-500 text-white rounded">승인</button>
      <button
      @click="clickedBtn(props.restaurant.id, 'reject')" 
      class="px-3 py-1 bg-red-500 text-white rounded">거절</button>
    </td>
  </tr>
</template>