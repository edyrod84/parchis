import React, { useMemo } from 'react';
import Cell from '../Cell/Cell';
import UserBox from '../UserBox/UserBox';
import colors from '../../utils/colors';
import './Square.css';

const Square = ({ number }) => {
    const totalCell = useMemo(()=> new Array(24).fill(''),[]);
    let count = number===1 ? 0 : number===3 ? 24 : number===5 ? 48 : number===7 ? 72 : null;
    const alignment = (number===1 || number===5) ? 'vertical': 'horizontal' ;
  return (
    <div 
    className={`Square number${number}`}
    style={{backgroundColor: colors[number]}}>
        {
            (number===0 || number===2 || number===6 || number===8 ) 
            ? <UserBox color={colors[number]}/> 
            : (number===1 || number===3 || number===5 || number===7 )
            ? ( totalCell.map((cell, i) => {
                    cell += count;
                    count++;
                    return <Cell key={cell} number={cell} alignment={alignment}/>
            }))
            : null

        }
    </div>
  )
}

export default Square;