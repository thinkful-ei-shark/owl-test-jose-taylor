import React from 'react';


export default function StageTile(props) {
    return (
        <div className='stage-tile'>
            <h3> {props.name} </h3> 
            <img className='tile' src={props.avatar}/>
        </div>

    )
}