import React, {Component} from 'react';
import Moment from 'moment';
import Helmet from 'react-helmet';
import Sound from 'react-sound';


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
        console.log(ended);
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

    render() {
        const {error} = this.props;
        const {ended, counting} = this.props.timer;

        return(
            <div className="timer">
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <Helmet title={Moment.utc(this.props.timer.time).format('mm:ss')} />
                <h3 className="timer-component">{ Moment.utc(this.props.timer.time).format('mm:ss') }</h3>
                <button onClick={this.startTimer.bind(this)}>{ (counting) ? 'Pause' : 'Start' }</button>
                {(ended) ? this.renderSound() : null }
            </div>
        );
    }

    startTimer() {
        const {set_counting} = this.props;
        const {_id, counting} = this.props.timer;
        let isCounting = !counting;
        set_counting(_id, isCounting);
    }
}

export default Timer;
