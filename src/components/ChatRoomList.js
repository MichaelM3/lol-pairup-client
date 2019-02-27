import React from 'react';
import { List, Button } from 'semantic-ui-react'

const ChatRoomList = (props) => {
  const totalUsers = props.chatroom.users.length

  return (
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={() => props.handleJoinChatroomClick(props.chatroom)}>Join</Button>
      </List.Content>
      <List.Content>
        <List.Header>{props.chatroom.name}</List.Header>
        Capacity: {totalUsers}/{props.chatroom.capacity}
      </List.Content>
    </List.Item>
  )

}

export default ChatRoomList;
