import Home from '../components/Home.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Moment from 'moment';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState, Collections} = context();
    const error = LocalState.get('TIMER_ERROR');

    if(Meteor.subscribe('all.timers').ready()) {
        const timers = Collections.Timer.find().fetch();
        return onData(null, {timers});
    } else {
        const timers = Collections.Timer.find().fetch();
        if(timers) return onData(null, {timers});
    }

    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    create: actions.home.create,
    clearErrors: actions.home.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Home);
