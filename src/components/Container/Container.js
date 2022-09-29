import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Gym from '../Gym/Gym';
import Information from '../Information/Information';
import Toasts from '../Toasts/Toasts';
import'./Container.css';

const Container = () => {
    const [gyms,setGyms]=useState([]);
    useEffect(()=>{
        const url=`fakedata.json`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setGyms(data))
    },[]);

    const [time,setTime]=useState([]);
    const addTOTime=(gyms)=>{
        const newTime=[...time,gyms];
        setTime(newTime);
        
        
    }

    return (
        <div>
            <h4>Select Your Exercise</h4>
            <div className="all-container">
                <div className="left-container">
                    {
                        gyms.map(gym=><Gym 
                            gym={gym} 
                            key={gym.id}
                            addTOTime={addTOTime}
                        ></Gym>)
                    }
                    
                </div>
                <div className="right-container">
                    <Information></Information>
                    <Exercise time={time}></Exercise>
                    <Break></Break>
                    <Toasts></Toasts>
                </div>
            </div>
        </div>
    );
};

export default Container;