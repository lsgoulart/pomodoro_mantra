import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Moment from 'moment';


class Home extends Component {
    render() {
        return(
            <div className="timer-app">
                <Helmet title="Timer" />
                <button onClick={this.newTimer.bind(this, 'pomodoro')}>5:00</button>
                <button onClick={this.newTimer.bind(this, 'break')}>25:00</button>
            </div>
        );
    }

    newTimer(type, e) {
        const {create} = this.props;
        create(type);
    }
}

export default Home;
