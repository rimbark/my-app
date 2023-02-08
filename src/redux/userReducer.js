import { userDataAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const followProgress = (userId) => ({ type: FOLLOW, userId })

const UNFOLLOW = 'UNFOLLOW'
export const unfollowProgress = (userId) => ({ type: UNFOLLOW, userId })

const SET_USERS = 'SET_USERS'
export const setUsers = (users) => ({ type: SET_USERS, users })

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const setToggle = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

const SENDING_DATA_IN_PROGRESS = 'SENDING_DATA_IN_PROGRESS'
const sendingFollowedData = (isSending, userId) => ({ type: SENDING_DATA_IN_PROGRESS, isSending, userId })

export const follow = (userId) => (dispatch) => {
    dispatch(sendingFollowedData(true, userId))
    userDataAPI.followUser(userId).then(data => {
      if (data.resultCode === 0)
        dispatch(followProgress(userId))
      dispatch(sendingFollowedData(false, userId))
    })
}

export const unfollow = (userId) => (dispatch) => {
   dispatch(sendingFollowedData(true, userId))
    userDataAPI.unFollowUser(userId).then(data => {
      if (data.resultCode === 0)
        dispatch(unfollowProgress(userId))
      dispatch(sendingFollowedData(false, userId))
    })
}

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setToggle(true))
    userDataAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setToggle(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
}

export const changePage = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(setToggle(true))
    userDataAPI.getUsers(pageNumber, pageSize).then(data => {
      dispatch(setToggle(false))
      dispatch(setUsers(data.items))
    })
}

const initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  sendingDataInProgress: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId)
            return { ...u, followed: true }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId)
            return { ...u, followed: false }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state, users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SENDING_DATA_IN_PROGRESS:
      return {
        ...state,
        sendingDataInProgress: action.isSending
          ? [...state.sendingDataInProgress, action.userId]
          : state.sendingDataInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export default userReducer
