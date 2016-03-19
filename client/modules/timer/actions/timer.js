export default {
    set({Meteor, LocalState, FlowRouter}, timerId, time) {
        if(!timerId) return LocalState.set('ERROR_SET_TIMER', 'Timer ID is required');
        if(!time) return LocalState.set('ERROR_SET_TIMER', 'Time is required');

        LocalState.set('ERROR_SET_TIMER', null);
        if(time > 0) time = time-1000;
        Meteor.call('timer.set', timerId, time, (err, result) => {});
    },

    set_counting({Meteor, LocalState, FlowRouter}, timerId, counting) {
        if(!timerId) return LocalState.set('ERROR_SET_TIMER', 'Timer ID is required');
        if(counting == null) return LocalState.set('ERROR_SET_TIMER', 'Counting is required');

        LocalState.set('ERROR_SET_COUNTING', null);
        Meteor.call('timer.counting', timerId, counting, (err, result) => {});
    },

    end_timer({Meteor, LocalState, FlowRouter}, timerId) {
        if(!timerId) return LocalState.set('ERROR_END_TIMER', 'Timer ID is required');
        LocalState.set('ERROR_SET_COUNTING', null);
        Meteor.call('timer.end', timerId, (err, result) => {});
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
}
