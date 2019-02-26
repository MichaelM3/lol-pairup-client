import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux'
import { allUsers } from "../actions/userActions"

class UserContainer extends Component {

  clickHandler = () => {
    this.props.increment()
    console.log(this.props.someNumber);
  }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>+</button>
      </>
    )
  }

}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    someNumber: state.user.someNumber
  }
}

export default connect(mapStateToProps, { allUsers })(UserContainer);
