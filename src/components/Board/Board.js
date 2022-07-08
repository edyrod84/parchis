import React, { useMemo } from 'react';
import Center from '../Center/Center';
import Diagonals from '../Diagonals/Diagonals';
import Square from '../Square/Square';
import './Board.css';

const Board = ({players}) => {
    const squares = useMemo(() => new Array(9).fill(''),[]);
  return (
    <div className='Board'>
        {squares.map((square, i) => <Square key={square} number={i}/> )}
        <>
          <Diagonals/>
          <Center/>
        </>
    </div>
  )
}

export default Board