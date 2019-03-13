export const allUsers = payload => {
  return {type: 'ALL_USERS', payload: payload}
}

export const login = payload => {
  return { type: 'LOGIN', payload: payload }
}

export const logout = () => {
  return { type: 'LOGOUT', payload: null }
}

export const viewedUser = payload => {
  return { type: 'VIEWED_USER', payload: payload }
}

export const changeLeagueAccount = payload => {
  return { type: 'CHANGE_LEAGUE_ACCOUNT', payload: payload }
}

export const addChampionToUser = payload => {
  return { type: 'ADD_CHAMPION_TO_USER', payload: payload }
}

export const addFriend = payload => {
  return { type: 'ADD_FRIEND', payload: payload }
}

export const addFriendshipJoin = payload => {
  return { type: 'ADD_FRIENDSHIP_JOIN', payload: payload }
}

export const removeFriend = payload => {
  return { type: 'REMOVE_FRIEND', payload: payload }
}

export const removeFriendshipJoin = payload => {
  return { type: 'REMOVE_FRIENDSHIP_JOIN', payload: payload }
}

export const primaryRoleChange = payload => {
  return { type: 'PRIMARY_ROLE_CHANGE', payload: payload }
}

export const offRoleChange = payload => {
  return { type: 'OFF_ROLE_CHANGE', payload: payload }
}
