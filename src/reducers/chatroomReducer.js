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
      return ({ chatrooms: state.chatrooms })
    default:
      return state
  }
}
