import React, {Component} from 'react';
import Moment from 'moment';
import Helmet from 'react-helmet';


class Timer extends Component {
    constructor(props) {
        super();
        this.props = this;
    }

    componentDidMount() {
        const {set} = this.props;
        const timer = setInterval(() => {
            const { _id, time, counting } = this.props.timer;
            console.log(time);
            if(time > 0){
                 if(counting) set(_id, time);
             }else {
                 clearInterval(timer);
             }
        }, 1000);
    }

    render() {
        const {error} = this.props;
        const {counting} = this.props.timer;

        return(
            <div className="timer">
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <Helmet title={Moment.utc(this.props.timer.time).format('mm:ss')} />
                <h3>{ Moment.utc(this.props.timer.time).format('mm:ss') }</h3>
                <button onClick={this.startTimer.bind(this)}>{ (counting) ? 'Pause' : 'Start' }</button>
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
