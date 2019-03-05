import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from './actions/userActions'
import Nav from './components/Nav';
import UserProfileContainer from './components/UserProfileContainer'
import ChatRoomContainer from './containers/ChatRoomContainer';
import UserContainer from './containers/UserContainer';
import ChatroomShow from './components/ChatroomShow'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

class App extends Component {

  state = {
    signUpFormName: "",
    signUpFormPassword: "",
    signUpFormSummonerName: "",
    logInFormName: "",
    logInFormPassword: "",
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      fetch(`http://localhost:3000/api/v1/current_user`, {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        this.props.login(response)
      })
    }
  }

  logout = () => {
    this.props.logout()
    localStorage.removeItem("token")
    this.props.history.push("/login")
  }

  handleFormInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.signUpFormName,
          password: this.state.signUpFormPassword,
          league_account: this.state.signUpFormSummonerName
        }
      })
    })
    .then(r => r.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        localStorage.setItem("token", response.token)
        this.props.login(response.user)
        this.props.history.push(`/users/${response.user.id}`)
      }
    })
  }

  handleLogInSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify({
        username: this.state.logInFormName,
        password: this.state.logInFormPassword
      })
    })
    .then(r => r.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        localStorage.setItem("token", response.token)
        this.props.login(response.user)
        this.props.history.push(`/users/${response.user.id}`)
      }
    })
  }

  render() {
    return (
      <div>
        <Nav currentUser={this.props.currentUser} logout={this.logout}/>
        <Switch>
          <Route
            exact path="/chatrooms"
            component={ChatRoomContainer}
          />
          <Route
            exact path="/chatrooms/:id"
            render={(routerProps) => <ChatroomShow
              selectedChatroom={this.props.selectedChatroom}
              {...routerProps}
            />}
          />
          <Route
            exact path="/users"
            component={UserContainer}
          />
          <Route
            exact path="/users/:id"
            render={(routerProps) => <UserProfileContainer
              {...routerProps}
            />}
          />
          <Route
            path="/login"
            render={(routerProps) => <LogIn
              logInFormName={this.state.logInFormName}
              logInFormPassword={this.state.logInFormPassword}
              handleFormInputs={this.handleFormInputs}
              handleLogInSubmit={this.handleLogInSubmit}
            />}
          />
          <Route
            path="/signup"
            render={(routerProps) => <SignUp
              signUpFormName={this.state.signUpFormName}
              signUpFormPassword={this.state.signUpFormPassword}
              handleFormInputs={this.handleFormInputs}
              handleSignUpSubmit={this.handleSignUpSubmit}
            />}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    selectedChatroom: state.chatroom.selectedChatroom
  }
}

export default withRouter(connect(mapStateToProps, { login, logout })(App));
