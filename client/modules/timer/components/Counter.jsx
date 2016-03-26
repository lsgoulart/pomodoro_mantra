import React, {Component} from 'react';
import Moment from 'moment';
import {Circle} from 'rc-progress';
import Sound from 'react-sound';

class Counter extends Component{
    componentDidMount() {
        const {set, end_timer} = this.props;
        const timer = setInterval(() => {
            const { _id, time, counting } = this.props;
            if(time > 0){
                 if(counting) set(_id, time);
             }else {
                 const { _id, time, counting } = this.props;
                 clearInterval(timer);
                 end_timer(_id);
             }
        }, 1000);
    }

    render() {
        const {_id, counting, time, type, ended} = this.props;
        return (
            <div className="counter-block">
                <div className="timer-holder">
                    <h3 className="timer-component">{ Moment.utc(time).format('mm:ss') }</h3>
                    <Circle percent={ this._getPercent() } strokeWidth="4" strokeColor="#ff5a4c" />
                </div>

                <button onClick={this._startTimer.bind(this)}>{ (counting) ? 'Pause' : 'Start' }</button>

                { (ended) ? this._renderSound() : null }
            </div>
        )
    }

    _renderSound() {
        return (
            <Sound
                url="/assets/alarm.mp3"
                playStatus={ Sound.status.PLAYING }
                playFromPosition={0}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying} />
        );
    }

    _getPercent() {
        const {type, time} = this.props;
        let mins = 0;

        if(type == 'pomodoro') mins = 25;
        else if(type == 'shortbreak') mins = 5;
        else mins = 15;

        let total = (60*mins)*1000;
        let percent = (time/total)*100;
        return percent;
    }

    _startTimer() {
        const {_id, counting, set_counting} = this.props;
        let isCounting = !counting;
        set_counting(_id, isCounting);
    }
}

export default Counter;
