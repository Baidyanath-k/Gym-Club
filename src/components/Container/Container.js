import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import'./Container.css';

const Container = () => {
    const [gyms,setGyms]=useState([]);
    useEffect(()=>{
        const url=`fakedata.json`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setGyms(data))
    },[]);
    return (
        <div>
            <h4>Select Your Exercise</h4>
            <div className="all-container">
                <div className="left-container">
                    {
                        gyms.map(gym=><Gym gym={gym} key={gym.id}></Gym>)
                    }
                    
                </div>
                <div className="right-container">
                    <p>This is right Container</p>
                </div>
            </div>
        </div>
    );
};

export default Container;