import React, { Component } from 'react';
import Nav from './components/containers/Nav';
import ChatRoomContainer from './components/containers/ChatRoomContainer';
import UserContainer from './components/containers/UserContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <ChatRoomContainer />
      </div>
    );
  }
}

export default App;
