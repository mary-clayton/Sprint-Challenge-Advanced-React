import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList';
import Togglebar from './components/Togglebar';

function App() {
  return (
    <div className="App">
      <Togglebar />
      <PlayersList />
    </div>
  );
}

export default App;
