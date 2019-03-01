export const allChatrooms = payload => {
  return {type: 'ALL_CHATROOMS', payload: payload}
}

export const currentChatroom = payload => {
  return {type: 'CURRENT_CHATROOM', payload: payload}
}

export const chatroomAllMessages = payload => {
  return {type: 'CHATROOM_ALL_MESSAGES', payload: payload}
}

export const newMessage = payload => {
  return {type: 'NEW_MESSAGE', payload: payload}
}
