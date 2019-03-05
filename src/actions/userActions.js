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
