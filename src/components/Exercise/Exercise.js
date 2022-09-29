import React from 'react';

const Exercise = ({time}) => {
    // console.log(time);
    let addTime=0;
    for(const newTime of time){
        addTime=newTime.time+addTime;
        console.log(addTime);
    }
    return (
        <div>
            <p>Exercise Time: {addTime}min</p>
        </div>
    );
};

export default Exercise;