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
  },
  followUser (userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data})
  },
  unFollowUser (userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data})
  }
}

export const profileDataAPI = {
  getUserProfile (userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data})
  },
  getUserStatus (userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data})
  },
  updateUserStatus (status) {
    debugger
    return instance.put(`profile/status`, { status })
      .then(response => {
        debugger
        return response.data})
  }
}

export const authDataAPI = {
  getAuthData () {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data})
  },
  signIn (email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe})
      .then(response => {
        return response.data
      })
  },
  signOut () {
    return instance.delete('auth/login')
  }

}
