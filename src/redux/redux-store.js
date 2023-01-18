import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsDataReducer from './friendsDataReducer'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    profileReducer,
    messagesReducer,
    friendsDataReducer
  }
)

export const store = configureStore({
  reducer: rootReducer
})