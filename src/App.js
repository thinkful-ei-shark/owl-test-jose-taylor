import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantList from './ParticipantList';

function App(props) {
  const {store} = props;
  console.log(store.participants);
  return (
    <div className="App">
            <ParticipantList
              participants={store.participants}
            />
    </div>
  );
}

export default App;
