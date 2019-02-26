export const allUsers = payload => {
  return {type: 'ALL_USERS', payload: payload}
}

export const login = payload => {
  return { type: 'LOGIN', payload: payload }
}

export const logout = () => {
  return { type: 'LOGOUT', payload: null }
}
