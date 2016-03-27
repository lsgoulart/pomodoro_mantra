import TaskList from '../components/TaskList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, timerId}, onData) => {
    const {Meteor, LocalState, Collections} = context();

    if(Meteor.subscribe('all.tasks', timerId).ready()) {
        const tasks = Collections.Tasks.find({timerId: timerId}).fetch();
        return onData(null, {tasks});
    } else {
        const tasks = Collections.Tasks.find({timerId: timerId}).fetch();
        if(tasks) return onData(null, {tasks});
    }

    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    create: actions.tasks.create,
    remove: actions.tasks.remove,
    set_completed: actions.tasks.set_completed,
    set_priority: actions.tasks.set_priority,
    clearErrors: actions.tasks.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(TaskList);
