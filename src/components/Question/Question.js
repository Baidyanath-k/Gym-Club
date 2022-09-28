import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <div className="react-work">
                <h2>How does react work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className="props-state">
                <h2>What is the difference between state and props in React?</h2>
                <p> <span>Props:</span> Props are read-only and immutable. Props allow you to pass data from one component to other components as an argument.Props can be accessed by the child component.Props are used to communicate between components.</p>
                <p><span>State:</span> State changes can be asynchronous and mutable. State holds information about the components. State cannot be accessed by child components. States can be used for rendering dynamic changes with the component.</p>
            </div>
            <div className="useEffect">
                <h2>Use of iuseEffect</h2>
                <p>The document title update is the side-effect because it doesn't directly calculate the component output. That's why document title update is placed in a callback and supplied to useEffect().</p>
            </div>
        </div>
    );
};

export default Question;