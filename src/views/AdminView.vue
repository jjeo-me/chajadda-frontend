<script setup>
import {ref, onMounted} from 'vue'
import AdminHeader from '../components/AdminHeader.vue'
import RestaurantTable from '../components/RestaurantTable.vue'
import PaginationBar from '../components/PaginationBar.vue'
import {approveRestaurant, rejectRestaurant, getPendingList} from '../api/restaurant.js'


/** variable */
const restaurants = ref([])
const currentPage = ref(0)
const totalPages = ref(0)

/** methods */
const fetchList = ()=>{
  getPendingList(currentPage.value).then(res => {
    restaurants.value = res.data.content
    totalPages.value = res.data.totalPages
  })
}

const handleAction = (({id, flag})=>{
  flag === 'approve' 
    ? approveRestaurant(id).then(fetchList) 
    : rejectRestaurant(id, '').then(fetchList)
})

const goToPage = (page) => {
  currentPage.value = page
  fetchList()
}

/** lifestyle */
onMounted(()=>{
  //리스트 가져오기
  fetchList()
})
</script>

<template>
  <div>
    <AdminHeader/>
    <RestaurantTable
      :restaurants="restaurants" 
      @action="handleAction"
    />
    <PaginationBar
      :currentPage="currentPage"
      :totalPages="totalPages"
      @change="goToPage"
    />
  </div>
</template>
