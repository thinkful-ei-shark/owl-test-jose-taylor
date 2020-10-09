import React from 'react';
import './index.css';
import Stage from './Stage';
import { render } from '@testing-library/react';
import store from './store';
import SideBar from './SideBar';

class App extends React.Component {
  state = store

  toggleChat = () => {
    this.setState({
      chat: !this.state.chat
    })
  };

  render() {
    return (
      <div className='App'>
        <SideBar participants={this.state.participants} chat={this.state.chat} chatEvents={this.state.chatEvents} toggleChat={this.toggleChat} />
        <Stage participants={this.state.participants} />
      </div>
    );
  }
}

export default App;
