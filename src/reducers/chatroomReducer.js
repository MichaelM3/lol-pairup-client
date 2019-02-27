export default function chatroomReducer (
	state = {
    chatrooms: [],
    selectedChatroom: null,
    selectedChatroomMessages: [],
	},
  action
) {
	switch (action.type) {
    case 'ALL_CHATROOMS':
      return ({ chatrooms: action.payload })
		case 'SELECTED_CHATROOM':
			return ({ selectedChatroom: action.payload })
    default:
      return state
  }
}
