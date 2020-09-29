import React from 'react';
import STORE from './store';


function Participant(props) {
  const onStage = (props.onStage) ? 'on stage' : 'not on stage';
  const inSession = (props.inSession) ? 'in-session' : 'left-session';
    return (
      <div className='user'>
        <div className='img'>
          <img src={props.avatar}></img>
        </div>
          <div className='user-status'>
          <h5> {props.name} </h5>
            <span className={inSession}></span>
          <p>
            <span>{onStage}</span>
            <span>Boot</span>
          </p>
          </div>
      </div>
    )
}

export default Participant;