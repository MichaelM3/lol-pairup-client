import React from 'react';

const UserProfile = (props) => {

  return (
    <>
      { props.currentUser ?
        <h1>{props.currentUser.username}</h1>
        :
        <h1>Not logged in</h1>
      }
    </>
  )

}

export default UserProfile;
