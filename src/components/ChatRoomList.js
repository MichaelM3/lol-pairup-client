import React from 'react';
import { List, Button } from 'semantic-ui-react'

const ChatRoomList = (props) => {
  const totalUsers = props.chatroom.users.length

  return (
    <List.Item>
      <List.Content>
        <List.Header style={{
          color: "white",
          font: "900 5vmin/5vh cookie, cursive",
          textAlign: "center" }}
        >
          {props.chatroom.name}
        </List.Header>
        Capacity: {totalUsers}/{props.chatroom.capacity}
      </List.Content>
      <List.Content align="right">
      <Button onClick={() => props.handleJoinChatroomClick(props.chatroom)}>Join</Button>
      </List.Content>
    </List.Item>
  )

}

export default ChatRoomList;
