import React from 'react';
import'./Gym.css';

const Gym = ({gym}) => {
    console.log(gym);
    const {name,picture,detaile,age,time}=gym;
    return (
        <div className='gym-section'>
            <div className="gym-section-img">
                <img src={picture} alt="" />
            </div>
            <div className="gym-section-details">
                <h3>{name}</h3>
                <p>{detaile.slice(0,100).concat('...')}</p>
                <p>Trained Age:{age}</p>
                <p>Gym Time:{time}</p>
            </div>
            <div className="gym-section-button">
                <button>Add to List</button>
            </div>
            
            
        </div>
    );
};

export default Gym;