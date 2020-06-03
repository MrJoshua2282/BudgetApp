import React from 'react';

import './ListContainer.css';
import { converter } from '../shared/convert';
const ListContainer = (props) => {
    let incomeList = props.iArr.map((el, i) => {
        return (
            <li key={i}>{el.description}: ${converter(el.value)} <button className='removeItem' onClick={e => props.deleteItem(e, el.id)}>x</button></li>
        );
    });

    let expenseList = props.eArr.map((el, i) => {
        return (
            <li key={i}>{el.description}: ${converter(el.value)} <button className='removeItem' onClick={e => props.deleteItem(e, el.id)}>x</button></li>
        );
    });
    return (
        <div className='listContainer'>
            <div className='list'>
                <h1>Income</h1>
                <ul>
                    {incomeList}
                </ul>
            </div>
            <div className='list'>
                <h1>Expense</h1>
                <ul>
                    {expenseList}
                </ul>
            </div>
        </div>
    );
}

export default ListContainer;