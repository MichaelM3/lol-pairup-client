import React from 'react'
import { Comment, Menu } from 'semantic-ui-react'
import '../App.css'
import Message from './Message'
import MessageForm from './MessageForm'
import { connect } from 'react-redux'
import { currentChatroom, newMessage, chatroomAllMessages } from "../actions/chatroomActions"
import { ActionCableConsumer } from 'react-actioncable-provider'
import { ENDPOINT_URL } from '../adapter'

class ChatroomShow extends React.Component {

  state = {
    messageForm: ""
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      fetch(`${ENDPOINT_URL}/api/v1/chatrooms/${this.props.match.params.id}`)
      .then(r => r.json())
      .then(response => {
        this.props.currentChatroom(response)
        this.props.chatroomAllMessages(response.messages)
      })
    }
  }

  handleMessageSubmit = (event) => {
    event.preventDefault()
    fetch(`${ENDPOINT_URL}/api/v1/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "message_content": this.state.messageForm,
        "user_id": this.props.currentUser.id,
        "chatroom_id": this.props.chatroom.id
      })
    })
    event.target.reset()
  }

  handleMessageInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  displayAllMessages = () => {
    const reversedMessages = this.props.chatroom.messages
    return reversedMessages.map(message => {
      let foundUser = this.props.chatroom.users.find(user => user.id === message.user_id)
      return <Message key={message.id} user={foundUser} message={message} />
    })
  }

  handleSocketResponse = (msgObj) => {
    // if (!this.props.chatroom.messages.find(message => message.id === msgObj.message.id)) {
      this.props.newMessage(msgObj.message)
    // }
  }

  displayAllUsers = () => {
    return this.props.chatroom.users.map(user => {
      return (
        <Menu.Item align="center" href={`/users/${user.id}`} key={user.id} target='_blank'>
          <h3>{user.username}</h3>
          <h3>Rank: {user.rank}</h3>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <div className="chatroom-container" style={{ marginRight: "150px" }}>
        <ActionCableConsumer
          channel={{ channel: 'ChatroomChannel', id: this.props.match.params.id}}
          onReceived={this.handleSocketResponse}
        />
        { this.props.chatroom &&
          <div style={{display: "inline-flex"}}>
            <h1 className="chatroom">
              {this.props.chatroom.name}
            </h1>
            <Comment.Group style={{ overflowX: "auto", height: "73vh"}}>
              {this.displayAllMessages()}
            </Comment.Group>
            <div style={{ overflowX: "auto", display: "inline-block", verticalAlign: "top", width: "20vw", height: "73vh", paddingLeft: "13%"}}>
              <h1 className="chatroom" align="center">Users</h1>
              <Menu align="center" vertical>
                {this.displayAllUsers()}
              </Menu>
            </div>
          </div>
        }
        <MessageForm handleMessageSubmit={this.handleMessageSubmit} handleMessageInput={this.handleMessageInput} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    chatroom: state.chatroom.selectedChatroom,
  }
}

export default connect(mapStateToProps, { currentChatroom, newMessage, chatroomAllMessages })(ChatroomShow);
