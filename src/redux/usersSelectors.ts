import { createSelector } from '@reduxjs/toolkit'
import {AppStateType} from "./redux-store";

const getUsersSelector = (state: AppStateType) => {
  return state.userReducer.users
}

export const getUsers = createSelector(getUsersSelector,
  (users) => {
  return users
})

export const getPageSize = (state: AppStateType) => {
  return state.userReducer.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.userReducer.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
  return state.userReducer.currentPage
}
export const getIsFetching = (state: AppStateType) => {
  return state.userReducer.isFetching
}
export const getSendingDataInProgress = (state: AppStateType) => {
  return state.userReducer.sendingDataInProgress
}