import React from 'react';
import './Cell.css';

const Cell = ({number, alignment, chips}) => {
  const circles = ['1','12','14','28','32','44','57','59','70','75','87','91'];
  return (
    circles.includes(number) 
    ? (
      <div className={`Cell num${number} ${alignment}`}>
        <div className='circle'></div> 
      </div>
      )
    :(<div className={`Cell num${number} ${alignment}`}></div>)
  )
}

export default Cell;