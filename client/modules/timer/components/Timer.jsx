import React, {Component} from 'react';
import Moment from 'moment';
import Helmet from 'react-helmet';
import Sound from 'react-sound';
import {Circle} from 'rc-progress';


class Timer extends Component {
    constructor(props) {
        super();
        this.props = this;
    }

    componentDidMount() {
        const {set} = this.props;
        const {end_timer} = this.props;
        const timer = setInterval(() => {
            const { _id, time, counting } = this.props.timer;
            if(time > 0){
                 if(counting) set(_id, time);
             }else {
                 const { _id, time, counting } = this.props.timer;
                 clearInterval(timer);
                 end_timer(_id);
             }
        }, 1000);
    }

    renderSound() {
        const {ended} = this.props.timer
        return(
            <Sound
                url="/assets/alarm.mp3"
                playStatus={ Sound.status.PLAYING }
                playFromPosition={0}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying} />
        )
    }

    getPercent() {
        const {type, time} = this.props.timer;
        let mins = 0;

        if(type == 'pomodoro') mins = 25;
        else if(type == 'shortbreak') mins = 5;
        else mins = 15;

        let total = (60*mins)*1000;
        let perc = (time/total)*100;
        return perc;
    }

    startTimer() {
        const {set_counting} = this.props;
        const {_id, counting} = this.props.timer;
        let isCounting = !counting;
        set_counting(_id, isCounting);
    }

    render() {
        const {error} = this.props;
        const {ended, counting, time} = this.props.timer;

        return(
            <div className="timer">
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <Helmet title={Moment.utc(time).format('mm:ss')} />

                <div className="timer-holder">
                    <h3 className="timer-component">{ Moment.utc(this.props.timer.time).format('mm:ss') }</h3>
                    <Circle percent={ this.getPercent() } strokeWidth="4" strokeColor="#ff5a4c" />
                </div>

                <button onClick={this.startTimer.bind(this)}>{ (counting) ? 'Pause' : 'Start' }</button>
                {(ended) ? this.renderSound() : null }
            </div>
        );
    }


}

export default Timer;
