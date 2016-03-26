import Counter from '../components/Counter.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, _id, counting, time, type, ended}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    onData(null, {_id, counting, time, type, ended});
};

export const depsMapper = (context, actions) => ({
    set: actions.counter.set,
    set_counting: actions.counter.set_counting,
    end_timer: actions.counter.end_timer,
    clearErrors: actions.counter.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Counter);
