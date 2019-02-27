export const allChatrooms = payload => {
  return {type: 'ALL_CHATROOMS', payload: payload}
}

export const selectedChatroom = payload => {
  return {type: 'SELECTED_CHATROOM', payload: payload}
}
