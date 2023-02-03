import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
})

export const userDataAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data})
  }
}

export const profileDataAPI = {
  getProfile (userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data})
  }
}

export const authDataAPI = {
  getAuthData () {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data})
  }
}

export const followUnfollowAPI = {
  followUser (userId) {
    return instance.post(`follow/${userId}`, {}, {
      withCredentials: true
    })
      .then(response => {
        return response.data})
  },
  unFollowUser (userId) {
    return instance.delete(`follow/${userId}`,{
      withCredentials: true})
      .then(response => {
        return response.data})
  }
}







