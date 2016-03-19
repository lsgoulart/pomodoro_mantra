import React, {Component} from 'react';
import Timer from '../../timer/containers/Timer.js';

const TimerTemplate = ({timerId}) => (
    <div className="timer-template">
        <h1>Pomodoro Timer</h1>
        <Timer timerId={timerId} />
    </div>
);

export default TimerTemplate;
