import React from 'react';
import STORE from './store';


function Participant(props) {
    return (
        <div className='user'>
        <div className='img'>
          <img src={props.avatar}></img>
        </div>
          <div className='user-status'>
          <h5> {props.name} </h5>
            <span className='in-session hidden'></span>
          <p>
            <span> On Stage</span>
            <span>Boot</span>
          </p>
          </div>
          </div>
    )
}

export default Participant;