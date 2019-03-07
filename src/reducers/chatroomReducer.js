export default function chatroomReducer (
	state = {
    chatrooms: [],
    selectedChatroom: null,
		chatroomMessages: [],
	},
  action
) {
	switch (action.type) {
    case 'ALL_CHATROOMS':
      return ({ ...state, chatrooms: action.payload })
		case 'CURRENT_CHATROOM':
			return ({ ...state, selectedChatroom: action.payload })
		case 'CHATROOM_ALL_MESSAGES':
			return ({ ...state, chatroomMessages: action.payload })
		case 'NEW_MESSAGE':
			return ({ ...state, selectedChatroom: {...state.selectedChatroom, messages: [action.payload, ...state.selectedChatroom.messages]} })
    default:
      return state
  }
}
