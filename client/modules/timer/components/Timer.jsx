import React, {Component} from 'react';
import Moment from 'moment';
import Helmet from 'react-helmet';
import Counter from '../containers/Counter.js';
import TaskList from '../containers/TaskList.js';

class Timer extends Component {
    render() {
        const { _id, time, type, counting, ended, error } = this.props;

        return(
            <div className="timer">
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <Helmet title={Moment.utc(time).format('mm:ss')} />

                <Counter _id={_id} counting={counting} time={time} type={type} ended={ended}/>

                {(type == 'pomodoro') ? <TaskList timerId={_id} /> : <h1>Enjoy your free time!</h1>}
            </div>
        );
    }
}

export default Timer;
