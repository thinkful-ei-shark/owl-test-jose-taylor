import React from 'react';
import STORE from './store';


function Participant(props) {
  const onStage = (props.onStage) ? 'on stage' : 'left session';
  const inSession = (!props.inSession) ? 'in-session hidden' : 'in-session';
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

function userStatusChange() {
if (props.inSession) {
	return 'in session';
} else if (props.onStage) {
	return 'on stage';
} else if (!props.onStage && !props.inSession) {
	return 'left session';
	status.classList.add('left-session');
}
}
export default Participant;