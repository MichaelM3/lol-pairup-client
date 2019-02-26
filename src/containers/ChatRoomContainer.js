import React, { Component } from 'react';
import ChatRoom from '../components/ChatRoom.js';
import { connect } from 'react-redux'
import { allChatrooms } from "../actions/chatroomActions"

class ChatRoomContainer extends Component {

  render() {
    return (
      <>
        <ChatRoom />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    chatrooms: state.chatroom.chatrooms,
  }
}

export default connect(mapStateToProps, { allChatrooms })(ChatRoomContainer);
