import chatroomReducer from './chatroomReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  user: userReducer,
  chatroom: chatroomReducer,
})
