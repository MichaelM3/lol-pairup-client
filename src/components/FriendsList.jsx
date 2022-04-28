import React from 'react'
import { Menu } from 'semantic-ui-react'

const FriendsList = props => {

  const showAllFriends = () => {
    if (props.currentUser.friends) {
      return props.currentUser.friends.map(friend => {
        return <Menu.Item href={`/users/${friend.id}`} key={friend.id}>{friend.username}</Menu.Item>
      })
    }
  }

  return (
    <div>
      { props.currentUser &&
        <div>
          {showAllFriends()}
        </div>
      }
    </div>
  )

}

export default FriendsList;
