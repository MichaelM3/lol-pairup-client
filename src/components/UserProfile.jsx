import React from 'react'
// import { Card, CardTitle } from 'react-materialize'

const UserProfile = props => {

  const displayTopChamps = () => {
    return props.currentlyViewedUser.champions.map(champion =>{
      return <div style={{ display: "inline-block" }} key={champion.id}>
        <h2 className="top-champs" align="center" style={{ fontSize: "initial" }}>{champion.name}</h2>
        <img src={champion.img} alt="" />
      </div>
    })
  }

  return (
    <div style={{ display: "inline-block", verticalAlign: "top", padding: "5%", paddingLeft: "25%" }}>
      <h1 id="h1-test">{props.currentlyViewedUser.league_account}</h1>
      <img
        src={props.currentlyViewedUser.user_icon} alt=""
        style={{ height: "215px" }}
      />
      <h2 className="profile-info" style={{paddingRight: "25vw"}}>Primary Role: {props.currentlyViewedUser.preffered_role}</h2>
      <h2 className="profile-info" style={{paddingRight: "30vw"}}>Off Role: {props.currentlyViewedUser.off_role}</h2>
      {displayTopChamps()}
    </div>
  )

}

export default UserProfile;
