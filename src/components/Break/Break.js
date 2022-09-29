import React, { useState } from 'react';
import './Break.css';


const Break = () => {

    const [breaks,setBreaks]=useState(0);
    const breakHandle=(num)=>{
        setBreaks(num);
    }
    
    return (
        <div className='break-time'>
            <h2>Add a Break</h2>
            <div className="break-btn">
                <button onClick={()=>breakHandle(10)}>10</button>
                <button onClick={()=>breakHandle(20)}>20</button>
                <button onClick={()=>breakHandle(30)}>30</button>
                <button onClick={()=>breakHandle(40)}>40</button>
                <button onClick={()=>breakHandle(50)}>50</button>
            </div>
            <div className="break-show">
                <h4>Break Time {breaks}min</h4>
            </div>
        </div>
    );
};

export default Break;