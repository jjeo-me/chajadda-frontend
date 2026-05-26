import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export const getPendingList = (page = 0) => {
    return axios.get(`${BASE_URL}/admin/restaurants?page=${page}`)
}

export const approveRestaurant = (id) => {
    return axios.post(`${BASE_URL}/admin/restaurants/${id}/approve`)
}

export const rejectRestaurant = (id, reason) => {
    return axios.post(`${BASE_URL}/admin/restaurants/${id}/reject`, reason, {
        headers: { 'Content-Type': 'text/plain' }
    })
}
