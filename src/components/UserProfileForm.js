import React from 'react'

const UserProfileForm = props => {

  return (
    <form onSubmit={props.handleLeagueInfoSubmit}>
      <input
        onChange={props.leagueAccountInputs}
        type="text"
        name="summonerName"
        placeholder="Change Summoner Name"
      />
      <input type="Submit"/>
    </form>
  )

}

export default UserProfileForm;
