import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    profileReducer,
    messagesReducer,
    friendsReducer,
    userReducer,
    authReducer
  }
)
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})
