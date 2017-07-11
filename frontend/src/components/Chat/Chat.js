import React, { Component } from 'react';
import logo from './logo.svg';
import './Chat.css';
import ChatInput from './ChatInput/ChatInput';
import ChatField from './ChatField/ChatField';
//import components
import NavBar from '../NavBar/NavBar';

const io = require('socket.io-client/dist/socket.io.js');


class Chat extends Component {

  componentDidMount() {
    const socket = io.connect('http://localhost:3001');
    // Query DOM
    const message = document.getElementById('message'),
          handle = document.getElementById('handle'),
          btn = document.getElementById('send'),
          output = document.getElementById('output'),
          feedback = document.getElementById('feedback');

    btn.addEventListener('click', ()=>{
      socket.emit('new-message', {
        message: message.value,
        handle: handle.value
      });
    });
    message.addEventListener('keypress', () => {
      socket.emit("typing", handle.value);
    });


  }

  // submitMessage = () => {
  //   let message = document
  // }

  render() {
    const self = this;
    return (
      <div className="App container-fluid">
        <NavBar/>
        <div id="mario-chat">
          <ChatField/>
          <ChatInput/>
        </div>
      </div>
    );
  }
}

export default Chat;