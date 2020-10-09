import React from 'react';


function Participant(props) {
  let status = '';
  let propArray = [props];
  
  if (props.inSession) {
    if(props.onStage) {
      status = 'On Stage';
    } else{ status = 'In Session' }
  } else {status = 'Left Session'};

    return (
      <div className='user'>
        <div className='img'>
          <img src={props.avatar}></img>
        </div>
          <div className='user-status'>
          <h3> {props.name} </h3>
          <p>
            <span className={props.inSession || props.onStage ? 'green' : 'gray'}>•</span>
            <span>{status}</span>
            <span><a href='#'>Boot</a></span>
          </p>
          </div>
      </div>
    )
}
export default Participant;