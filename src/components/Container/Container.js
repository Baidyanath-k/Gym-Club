import React from 'react';
import'./Container.css';

const Container = () => {
    return (
        <div>
            <h4>Select Your Exercise</h4>
            <div className="all-container">
                <div className="left-container">
                    <p>This is Left Container</p>
                </div>
                <div className="right-container">
                    <p>This is right Container</p>
                </div>
            </div>
        </div>
    );
};

export default Container;