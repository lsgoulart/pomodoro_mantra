import Counter from '../components/Timer.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Moment from 'moment';


export const composer = ({context, timerId}, onData) => {
    const {Meteor, Collections} = context();
    const id = timerId.timerId;

    if(Meteor.subscribe('single.timer', id).ready()) {
        const timer = Collections.Timer.findOne(id);
        onData(null, {timer});
    } else {
        const timer = Collections.Timer.findOne(id);
        if(timer) onData(null, {timer});
    }
};

export const depsMapper = (context, actions) => ({
    set: actions.timer.set,
    set_counting: actions.timer.set_counting,
    end_timer: actions.timer.end_timer,
    clearErrors: actions.timer.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Counter);
