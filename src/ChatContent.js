import React from 'react';

export default function ChatContent(props) {
  
  let timeStamp = new Date(props.timestamp).toLocaleTimeString();

  let content = '';
  const name = props.participant.name;

  switch(props.type) {
    case 'message':
      content = props.message;
      break;
    case 'thumbs-up':
      content = `${name} gave a thumbs up 👍`;
      break;
    case 'thumbs-down':
      content = `${name} gave a thumbs down 👎`;
      break;
    case 'raise-hand':
      content = `${name} raised their hand 🖐`;
      break;
    case 'clap':
      content = `${name} clapped 👏`;
      break;
    case 'leave':
      content = `${name} left`;
      break;
    case 'join-stage':
      content = `${name} has joined the stage`;
      break;
    case 'leave-stage':
      content = `${name} has left the stage`;
      break;
    case 'join':
      content = `${name} joined`;
      break;
  }
  
  return (
    <div className='chat-user'>
      <div className='chat-img'>
        <img src={props.participant.avatar}></img>
      </div>
      <div className='chat-info'>
        <div className='name-time'>
        <h4 className='chat-name'> {name} </h4>
        <p className='time-stamp'> {timeStamp} </p>
        </div>

        <p className='chat-text'> {content} </p>
        
      </div>
    </div>
  );
}
