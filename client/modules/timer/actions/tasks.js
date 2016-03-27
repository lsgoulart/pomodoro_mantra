export default {
    create({Meteor, LocalState, FlowRouter}, timerId, task) {
        Meteor.call('tasks.create', timerId, task, (err) => {
            if(err) LocalState.set('CREATE_TASK_ERROR', err);
        });
    },

    remove({Meteor, LocalState, FlowRouter}, taskId) {
        Meteor.call('tasks.remove', taskId, (err) => {
            if(err) LocalState.set('REMOVE_TASK_ERROR', err);
        });
    },

    set_completed({Meteor, LocalState, FlowRouter}, taskId) {
        Meteor.call('tasks.toggle.completed', taskId, (err, result) => {
            if(err) LocalState.set('SET_COMPLETED_TASK_ERROR', err);
        });
    },

    set_priority({Meteor, LocalState, FlowRouter}, taskId, priority) {
        Meteor.call('tasks.set.priority', taskId, priority, (err) => {
            if(err) LocalState.set('SET_PRIORITY_ERROR', err);
        });
    }
};
