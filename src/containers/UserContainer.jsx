import React, { Component } from 'react';
import { connect } from 'react-redux'
import { allUsers } from "../actions/userActions"
import { Card } from 'semantic-ui-react'

class UserContainer extends Component {



  render() {
    return (
      <Card.Group itemsPerRow={6}>

      </Card.Group>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    currentlyViewedUser: state.user.currentlyViewedUser
  }
}

export default connect(mapStateToProps, { allUsers })(UserContainer);

// <Card raised image={'https://static.thenounproject.com/png/50320-200.png'} />
