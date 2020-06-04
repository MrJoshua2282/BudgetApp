import React from 'react';

import './InputBar.css';

const InputBar = (props) => {
    return (
        <div className='inputBar-div'>
            <select className='selectType' value={props.type} onChange={props.changeType} >
                <option value='income' id='income' className='optionValue' >income</option>
                <option value='expense' id='expense' className='optionValue' >expense</option>
            </select>

            <input type='text' className={`inputBar-description ${props.type === 'income' ? `incomeStyle` : `expenseStyle`}`} placeholder='description' value={props.description} onChange={props.changeDescription} />

            <input type='number' className={`inputBar-input ${props.type === 'income' ? `incomeStyle` : `expenseStyle`}`} placeholder='$ amount' value={props.value} onChange={props.changeValue} />

            <button className={`inputBar-btn ${props.type === 'income' ? `incomeStyle` : `expenseStyle`}`} value='addBtn' onClick={props.clicked}>add</button>
        </div >
    );
};

export default InputBar;