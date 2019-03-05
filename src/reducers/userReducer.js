export default function userReducer (
	state = {
    currentUser: null,
		currentlyViewedUser: null,
		filteredUsers: [],
	},
  action
) {
	switch (action.type) {
    case 'ALL_USERS':
      return ({ ...state, users: action.payload })
    case 'LOGIN':
      return ({ ...state, currentUser: action.payload })
		case 'LOGOUT':
			return ({ ...state, currentUser: action.payload })
		case 'VIEWED_USER':
			return ({ ...state, currentlyViewedUser: action.payload })
		case 'ADD_FRIEND':
		 return ({ ...state, currentUser: { ...state.currentUser, friends: [...state.currentUser.friends, action.payload] } })
		case 'CHANGE_LEAGUE_ACCOUNT':
			return ({ ...state, currentUser: { ...state.currentUser, league_account: action.payload }, viewedUser: { ...state.viewedUser, league_account: action.payload } })
    default:
      return state
  }
}
