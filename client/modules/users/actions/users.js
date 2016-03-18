export default {
    create({Meteor, LocalState, FlowRouter}, name, email, password) {
        if (!name) return LocalState.set('CREATE_USER_ERROR', 'Name is required.');
        if (!email) return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
        if (!password) return LocalState.set('CREATE_USER_ERROR', 'Password is required.');

        LocalState.set('CREATE_USER_ERROR', null);

        Accounts.createUser({email, password, profile: {name}}, (err, result) => console.log(err, result));
        FlowRouter.go('/');
    },

    login({Meteor, LocalState, FlowRouter}, email, password) {
        if (!email) return LocalState.set('LOGIN_ERROR', 'Email is required.');
        if (!password) return LocalState.set('LOGIN_ERROR', 'Password is required.');

        LocalState.set('LOGIN_ERROR', null);

        Meteor.loginWithPassword(email, password, (err, result) => {
            if(err) LocalState.set('LOGIN_ERROR', err.reason);
        });
        
        Accounts.onLogin(() => FlowRouter.go('/'));
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
};
