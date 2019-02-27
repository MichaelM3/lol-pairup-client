import React from 'react'
import { Button, Comment, Header } from 'semantic-ui-react'
import '../App.css'

const ChatroomShow = (props) => {

  const displayAllMessages = () => {
    return props.selectedChatroom.messages.map(message => {
      return <div key={message.id} className="container">
        <p>{message.message_content}</p>
      </div>
    })
  }

  return (
    <Comment.Group>
      <Header as='h1' dividing>
        {props.selectedChatroom.name}
      </Header>
      {displayAllMessages()}
    </Comment.Group>
  )
}

export default ChatroomShow;
