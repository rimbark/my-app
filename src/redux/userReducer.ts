import {userDataAPI} from '../api/api'
import {subscribeStatus} from '../helpers/followUnfollowForReducer'
import {UsersType} from "./Types";

const FOLLOW = 'FOLLOW'
type FollowProgressActionType = {
    type: typeof FOLLOW
    userId: number
}
const followProgress = (userId: number): FollowProgressActionType => ({type: FOLLOW, userId})

const UNFOLLOW = 'UNFOLLOW'
type UnfollowProgressActionType = {
    type: typeof UNFOLLOW
    userId: number
}
const unfollowProgress = (userId: number): UnfollowProgressActionType => ({type: UNFOLLOW, userId})

const SET_USERS = 'SET_USERS'
type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersType
}
const setUsers = (users: UsersType): SetUsersActionType => ({type: SET_USERS, users})

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}
const setCurrentPage = (page: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, page})

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
type SetToggleActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
const setToggle = (isFetching: boolean): SetToggleActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

const SENDING_DATA_IN_PROGRESS = 'SENDING_DATA_IN_PROGRESS'
type SendingFollowedDataActionType = {
    type: typeof SENDING_DATA_IN_PROGRESS
    isSending: boolean
    userId: number
}
const sendingFollowedData = (isSending: boolean, userId: number): SendingFollowedDataActionType => ({
    type: SENDING_DATA_IN_PROGRESS,
    isSending,
    userId
})

const followUnfollowUser = async (userId: number, apiMethod: any, actionCreator: any, dispatch: any) => {
    dispatch(sendingFollowedData(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0)
        dispatch(actionCreator(userId))
    dispatch(sendingFollowedData(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
       await followUnfollowUser(userId, userDataAPI.followUser.bind(userDataAPI), followProgress, dispatch)
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
       await followUnfollowUser(userId, userDataAPI.unFollowUser.bind(userDataAPI), unfollowProgress, dispatch)
    }
}

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setToggle(true))
    const data = await userDataAPI.getUsers(currentPage, pageSize)
    dispatch(setToggle(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const changePage = (pageNumber: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(setToggle(true))
    const data = await userDataAPI.getUsers(pageNumber, pageSize)
    dispatch(setToggle(false))
    dispatch(setUsers(data.items))
}

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    sendingDataInProgress: [] as Array<number>  //  array of users id's
}

type InitialStateType = typeof initialState

const userReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: subscribeStatus(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: subscribeStatus(state.users, action.userId, 'id', {followed: false})
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
