import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
import '../App.css'
import Message from './Message'
import MessageForm from './MessageForm'
import { connect } from 'react-redux'
import { currentChatroom, newMessage, chatroomAllMessages } from "../actions/chatroomActions"
import { ActionCableConsumer } from 'react-actioncable-provider'

class ChatroomShow extends React.Component {

  state = {
    messageForm: ""
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      fetch(`http://localhost:3000/api/v1/chatrooms/${this.props.match.params.id}`)
      .then(r => r.json())
      .then(response => {
        this.props.currentChatroom(response)
        this.props.chatroomAllMessages(response.messages)
        console.log(this.props.chatroom);
      })
    }
  }

  handleMessageSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/messages`, {
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
    return this.props.chatroom.messages.map(message => {
      let foundUser = this.props.chatroom.users.find(user => user.id === message.user_id)
      return <Message key={message.id} user={foundUser} message={message} />
    })
  }

  handleSocketResponse = (msgObj) => {
    if (!this.props.chatroom.messages.find(message => message.id === msgObj.message.id)) {
      this.props.newMessage(msgObj.message)
    }
  }

  render() {
    return (
      <div>
        <ActionCableConsumer
          channel={{ channel: 'ChatroomChannel', id: this.props.match.params.id}}
          onReceived={this.handleSocketResponse}
        />
        { this.props.chatroom &&
          <Comment.Group>

            <Header as='h1' dividing>
              {this.props.selectedChatroom.name}
            </Header>
            {this.displayAllMessages()}
          </Comment.Group>
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
