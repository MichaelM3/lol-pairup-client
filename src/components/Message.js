import React from 'react'
import { connect } from 'react-redux'

const Message = (props) => {

  return (
    <div>
      { props.currentUser && (props.user.username === props.currentUser.username ?
        <div className="container">
          <p>{props.message.message_content}</p>
          <h4 className="time-right">You</h4>
        </div>
        :
        <div className="container darker">
          <p>{props.message.message_content}</p>
          <h4 className="time-right">{props.user.username}</h4>
        </div>)
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Message);
