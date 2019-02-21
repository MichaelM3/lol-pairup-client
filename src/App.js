import React, { Component } from 'react';
import ChatRoomContainer from './components/containers/ChatRoomContainer'
import Nav from './components/containers/Nav'
import UserContainer from './components/containers/UserContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatRoomContainer />
      </div>
    );
  }
}

export default App;
