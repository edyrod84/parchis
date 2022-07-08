import React, {useState, useMemo } from 'react';
import Game from '../Game/Game';
import './App.css'


const App = () => {
  const [players, setPlayers] = useState([]);
  const handlePlayers = (event) => {
    const { names, colors } = event.target;
    const newPlayers = [{name: 'Edy', color: 'red'}, {name: 'Juan', color: 'blue'}];
    // names.forEach((name, index) => {
    //   newPlayers.push({ name, color: colors[index]});
    // });
    setPlayers(newPlayers);
  }
  const memoPlayers = useMemo(() => handlePlayers, []);
  return (
    <div className='App'>
      <Game players={memoPlayers}/>
    </div>
  )
}

export default App
