import Home from '../components/Home.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Moment from 'moment';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('TIMER_ERROR');
    onData(null, {clearErrors})

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
