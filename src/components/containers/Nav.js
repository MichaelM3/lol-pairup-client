import React, { Component } from 'react';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import UserProfile from '../UserProfile';

export default class Nav extends Component {

  render() {
    return (
      <>
        <LogIn />
        <SignUp />
        <UserProfile />
      </>
    )
  }

}
