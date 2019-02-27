export default function userReducer (
	state = {
    currentUser: null,
		currentlyViewedUser: null,
    summonerEncryptedId: null,
	},
  action
) {
	switch (action.type) {
    case 'ALL_USERS':
      return (
        { ...state, users: action.payload },
        console.log(state)
      )
    case 'LOGIN':
      return { currentUser: action.payload }
		case 'LOGOUT':
			return { currentUser: action.payload }
    default:
      return state

  }
}
