import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    messagesReducer: messagesReducer,
    friendsReducer: friendsReducer,
    userReducer: userReducer
  }
)

export const store = configureStore({
  reducer: rootReducer
})