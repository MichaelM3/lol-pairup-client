import React from 'react'
// import { Card, CardTitle } from 'react-materialize'

const UserProfile = props => {

  return (
    <div>
      <h1>{props.currentlyViewedUser.league_account}</h1>
      <img src={props.currentlyViewedUser.user_icon} alt="" />
    </div>
  )

}

export default UserProfile;
