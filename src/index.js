// Import React and React-DOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react Component
const App = function() {
    return <div>Hi There!!</div>;
};

// Take the react Component & show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);