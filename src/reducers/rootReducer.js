import chatroomReducer from './chatroomReducer'
import userReducer from './userReducer'
import championReducer from './championReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  user: userReducer,
  chatroom: chatroomReducer,
  champion: championReducer,
})
