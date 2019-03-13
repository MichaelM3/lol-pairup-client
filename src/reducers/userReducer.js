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
		case 'ADD_FRIENDSHIP_JOIN':
			return ({ ...state, currentUser: { ...state.currentUser, friendships: [...state.currentUser.friendships, action.payload] } })
		case 'REMOVE_FRIEND':
			return ({ ...state, currentUser: { ...state.currentUser, friends: state.currentUser.friends.filter(friends => friends !== action.payload) } })
		case 'REMOVE_FRIENDSHIP_JOIN':
			return ({ ...state, currentUser: { ...state.currentUser, friendships: state.currentUser.friendships.filter(friendship => friendship !== action.payload) } })
		case 'CHANGE_LEAGUE_ACCOUNT':
			return ({ ...state, currentUser: { ...state.currentUser, league_account: action.payload }, viewedUser: { ...state.viewedUser, league_account: action.payload } })
		case 'ADD_CHAMPION_TO_USER':
			return ({ ...state, currentUser: { ...state.currentUser, champions: [...state.currentUser.champions, action.payload] } })
		case 'PRIMARY_ROLE_CHANGE':
			return ({ ...state, currentUser: { ...state.currentUser, preffered_role: action.payload } })
		case 'OFF_ROLE_CHANGE':
			return ({ ...state, currentUser: { ...state.currentUser, off_role: action.payload } })
    default:
      return state
  }
}
