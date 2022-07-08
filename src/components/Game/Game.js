import React from 'react';
import Board from '../Board/Board';
import './Game.css';

const Game = ({players}) => {
  return (
    <div className='Game'>
        <Board players={players}/>
    </div>
  )
}

export default Game