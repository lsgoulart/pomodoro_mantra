import React, {Component} from 'react';
import Home from '../../timer/containers/Home.js';

const HomeTemplate = ({timerId}) => (
    <div className="timer-template">
        <h1>Pomodoro Timer</h1>
        <Home />
    </div>
);

export default HomeTemplate;
