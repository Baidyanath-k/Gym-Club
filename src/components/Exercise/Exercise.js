import React from 'react';
import './Exercise.css';

const Exercise = ({time}) => {
    // console.log(time);
    let addTime=0;
    for(const newTime of time){
        addTime=newTime.time+addTime;
        console.log(addTime);
    }
    return (
        <div className='exe-details'>
            <h2>Exercise Details</h2>
            <p>Exercise Time: {addTime}min</p>
        </div>
    );
};

export default Exercise;