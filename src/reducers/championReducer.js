export default function championReducer (
	state = {
    champions: [],
	},
  action
) {
	switch (action.type) {
    case 'ALL_CHAMPIONS':
      return ({ ...state, champions: action.payload })
    default:
      return state
  }
}
