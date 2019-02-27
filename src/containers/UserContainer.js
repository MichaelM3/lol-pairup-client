import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux'
import { allUsers } from "../actions/userActions"

class UserContainer extends Component {

  render() {
    return (
      <>
      </>
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
