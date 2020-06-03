import React from 'react';

import './Top.css';

const Top = (props) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    const day = d.getDay();
    const date = d.getDate();
    const year = d.getFullYear();
    return (
        <div className='top-div'>
            <div className='top-date' >{days[day]} {date}, {year}</div>
            <div className='top-amount' onChange={props.changed}>Balance: ${props.total.toLocaleString()}</div>
        </div>
    );
};

export default Top;