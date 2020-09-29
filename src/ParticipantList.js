import React from 'react';
import Participant from './Participant';

function ParticipantList(props) {
    return (
    <div className='user-list'>
      {props.participants.map((person) =>
        <Participant 
            key={person.id}
            name={person.name}
            avatar={person.avatar}
            inSession={person.inSession}
            onStage={person.onStage}
        />
      )}
    </div>
  )
};



export default ParticipantList;