import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'
import { appReducer } from './appReducer'

const rootReducer = combineReducers({
    profileReducer,
    messagesReducer,
    friendsReducer,
    userReducer,
    authReducer,
    appReducer
  }
)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})
