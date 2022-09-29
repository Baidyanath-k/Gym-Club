import React from 'react';
import logo from '../../images/mylogo.jpg';
import './Information.css'

const Information = () => {
    return (
        <div className='my-information'>
            <div className="name-image">
                <div className="my-img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="my-name">
                    <h3>Rupom Sarker</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="my-birthday">
                <div className="day">
                    <h3>12</h3>
                    <h5>Day</h5>
                </div>
                <div className="month">
                    <h3>09</h3>
                    <h5>Month</h5>
                </div>
                <div className="year">
                    <h3>1998</h3>
                    <h5>Year</h5>
                </div>
            </div>
            
        </div>
    );
};

export default Information;