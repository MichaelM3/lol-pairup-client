import React, { Component } from 'react';
import ChatRoomList from '../components/ChatRoomList';
import { connect } from 'react-redux'
import { allChatrooms, selectedChatroom } from "../actions/chatroomActions"
import { List } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class ChatRoomContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/chatrooms')
    .then(res => res.json())
    .then(response => {
      this.props.allChatrooms(response)
      // let token = localStorage.getItem("chatroomToken")
      // if (token) {
      //   const foundChatroom = this.props.chatrooms.find(chatroom => chatroom.id === parseInt(token))
      //   this.props.selectedChatroom(foundChatroom)
      // }
    })
  }

  displayChatrooms = () => {
    return this.props.chatrooms.map(chatroom => {
      return <ChatRoomList key={chatroom.id}
        chatroom={chatroom}
        handleJoinChatroomClick={this.handleJoinChatroomClick}
      />
    })
  }

  handleJoinChatroomClick = (chatroom) => {
    fetch(`http://localhost:3000/api/v1/chatroom_users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        chatroom_id: chatroom.id
      })
    })
    .then(r => r.json())
    .then(response => {
      if (!response.user_id) {
        alert(response.messages)
      } else {
        localStorage.setItem("chatroomToken", chatroom.id)
        this.props.selectedChatroom(chatroom)
        this.props.history.push(`/chatrooms/${chatroom.id}`)
      }
    })
  }

  render() {
    return (
      <div>
        { this.props.chatrooms &&
          <List size='huge'>
            {this.displayChatrooms()}
          </List>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    chatrooms: state.chatroom.chatrooms,
    selectedChatroom: state.chatroom.selectedChatroom
  }
}

export default withRouter(connect(mapStateToProps, { allChatrooms, selectedChatroom })(ChatRoomContainer));
