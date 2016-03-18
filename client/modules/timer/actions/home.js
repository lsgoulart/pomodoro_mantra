export default {
    create({Meteor, LocalState, FlowRouter}, type) {
        if(!type) return LocalState.set('CREATE_TIMER_ERROR', 'Type is required');

        LocalState.set('CREATE_TIMER_ERROR', null);
        Meteor.call('home.create.timer', type, (err, result) => {
            if(err) return LocalState.set('CREATE_TIMER_ERROR', err.message);
            FlowRouter.go(`/timer/${result}`);
        });
    },
}
