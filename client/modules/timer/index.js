import actions from './actions';
import routes from '../core/routes.jsx';
import methodStubs from './method_stubs';

export default {
    routes,
    actions,
    load(context) {
        methodStubs(context);
    }
};
