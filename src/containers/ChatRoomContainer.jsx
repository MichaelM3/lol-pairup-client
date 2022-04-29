import React, { Component } from 'react';
import ChatRoomList from '../components/ChatRoomList';
import { connect } from 'react-redux'
import { allChatrooms, currentChatroom } from "../actions/chatroomActions"
import { List } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { ENDPOINT_URL } from '../adapter'

class ChatRoomContainer extends Component {

  componentDidMount() {
    fetch(`${ENDPOINT_URL}/api/v1/chatrooms`)
    .then(res => res.json())
    .then(response => {
      this.props.allChatrooms(response)
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
    fetch(`${ENDPOINT_URL}/api/v1/chatroom_users`, {
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
        this.props.currentChatroom(chatroom)
        this.props.history.push(`/chatrooms/${chatroom.id}`)
      }
    })
  }

  render() {
    return (
      <div className="chatroom-list" style={{ height: "100%", marginRight: "350px" }}>
        { this.props.chatrooms &&
          <List className="chatroom-name" size='huge'>
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

export default withRouter(connect(mapStateToProps, { allChatrooms, currentChatroom })(ChatRoomContainer));
