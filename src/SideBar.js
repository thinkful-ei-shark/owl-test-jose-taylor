import React, { Component } from 'react';
import ParticipantList from './ParticipantList';
import Chat from './Chat'


export default function SideBar(props) {
    if (props.chat === true) {
        return <Chat toggleChat={props.toggleChat} chatEvents={props.chatEvents} participants={props.participants}/>
    } else {
        return <ParticipantList toggleChat={props.toggleChat} participants={props.participants}/>
    }
}