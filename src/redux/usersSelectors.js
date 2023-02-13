export const getUsers = (state) => {
  return state.userReducer.users
}
export const getPageSize = (state) => {
  return state.userReducer.pageSize
}
export const getTotalUsersCount = (state) => {
  return state.userReducer.totalUsersCount
}
export const getCurrentPage = (state) => {
  return state.userReducer.currentPage
}
export const getIsFetching = (state) => {
  return state.userReducer.isFetching
}
export const getSendingDataInProgress = (state) => {
  return state.userReducer.sendingDataInProgress
}