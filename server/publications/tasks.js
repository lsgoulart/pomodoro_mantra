import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
    Meteor.publish('all.tasks', (timerId) => {
        check(timerId, String);
        const selector = { timerId: timerId };
        const options = {
            sort: { createdAt: -1 }
        };

        return Tasks.find(selector, options);
    });

    Meteor.publish('single.task', (taskId) => {
        check(taskId, String);
        const selector = { _id: taskId };

        return Tasks.find(selector);
    });
};
