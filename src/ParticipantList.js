import React from 'react';
import Participant from './Participant';

function ParticipantList(props) {
    return (
      <div className='user-list'>
        <div className='controls'>
          <button className='chat-log' onClick={props.toggleChat}>
            {' '}
            Chat{' '}
          </button>
        </div>
        {props.participants.map(person => (
          <Participant
            key={person.id}
            name={person.name}
            avatar={person.avatar}
            inSession={person.inSession}
            onStage={person.onStage}
          />
        ))}
      </div>
    );
  }

export default ParticipantList;
