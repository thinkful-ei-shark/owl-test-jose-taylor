import React from 'react';
import ChatContent from './ChatContent';

function Chat(props) {
  return (
    <div className='user-list'>
      <div className='controls'>
        <button className='participants-list' onClick={props.toggleChat}>
          Participants
        </button>
      </div>
      <div>
        {props.chatEvents.map((event, index) => (
          <ChatContent
            key={index}
            participant={props.participants.find(
              participant => participant.id === event.participantId
            )}
            message={event.message}
            type={event.type}
            timestamp={event.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
