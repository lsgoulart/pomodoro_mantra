export default {
    create({Meteor, LocalState, FlowRouter}, timerId, task) {
        console.log('create new Task', timerId, task);
        Meteor.call('tasks.create', timerId, task, (err) => {
            if(err) LocalState.set('CREATE_TASK_ERROR', err);
        });
    },

    remove({Meteor, LocalState, FlowRouter}, taskId) {

    },

    set_done({Meteor, LocalState, FlowRouter}, taskId) {

    },

    set_priority({Meteor, LocalState, FlowRouter}, taskId) {

    }
};
