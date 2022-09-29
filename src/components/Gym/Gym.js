import React from 'react';
import'./Gym.css';

const Gym = ({gym,addTOTime}) => {
    
    const {name,picture,detaile,age,time}=gym;
    return (
        <div className='gym-section'>
            <div className="gym-section-img">
                <img src={picture} alt="" />
            </div>
            <div className="gym-section-details">
                <h3>{name}</h3>
                <p>{detaile.slice(0,100).concat('...')}</p>
                <h4>Trained Age: {age}</h4>
                <h4>Gym Time: {time}min</h4>
            </div>
            <div className="gym-section-button">
                <button onClick={()=>addTOTime(gym)}>Add to List</button>
            </div>
            
            
        </div>
    );
};

export default Gym;