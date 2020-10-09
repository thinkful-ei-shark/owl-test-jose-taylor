import React from 'react';
import StageTile from './StageTile';

function Stage(props) {
  return (
    <div className='js-stage'>
      {props.participants.map(person => (
        <StageTile key={person.id} name={person.name} avatar={person.avatar} />
      ))}
    </div>
  );
}

export default Stage;
