// Import React and React-DOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react Component
const App = () => {
    const labelText = "Enter Name:";
    const buttonText = { text: 'Click me'};

    return (
    <div>
        <label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
        </button>
    </div>
    );
};

// Take the react Component & show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);