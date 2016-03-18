import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
import Home from '../timer/containers/Home.js';
import Timer from '../timer/containers/Timer.js';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);

    FlowRouter.route('/', {
        name: 'timer.index',
        action() {
            if(!Meteor.user()) return FlowRouter.go('/login');

            mount(MainLayoutCtx, {
                content: () => (<Home />)
            });
        }
    });

    FlowRouter.route('/timer/:timerId', {
        name: 'timer.id',
        action(timerId) {
            if(!Meteor.user()) return FlowRouter.go('/login');

            mount(MainLayoutCtx, {
                content: () => (<Timer timerId={timerId} />)
            });
        }
    });

    FlowRouter.route('/register', {
        name: 'users.new',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NewUser />)
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'users.login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });

    FlowRouter.route('/logout', {
        name: 'users.logout',
        action() {
            Meteor.logout();
            FlowRouter.go('/');
        }
    });
}
