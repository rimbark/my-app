const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SENDING_DATA_IN_PROGRESS = 'SENDING_DATA_IN_PROGRESS'
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setToggle = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const sendingFollowedData = (isSending, userId) => ({ type: SENDING_DATA_IN_PROGRESS, isSending, userId })

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
