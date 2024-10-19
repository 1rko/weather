import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Weather} from "./Components/Weather";

function App() {

    return (
        <div className="App">
            <h1>Weather App</h1>
            <Weather/>
        </div>
    );
}

export default App;
