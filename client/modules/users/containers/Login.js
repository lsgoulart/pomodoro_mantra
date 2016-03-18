import Login from '../components/Login.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('LOGIN_ERROR');
    onData(null, {error});

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
  loginUser: actions.users.login,
  clearErrors: actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
