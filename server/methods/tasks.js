import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
    Meteor.methods({
        'tasks.create'(timerId, task) {
            check(timerId, String);
            check(task, String);

            const createdAt = new Date();
            const completed = false;
            const priority = 0;
            const newTask = { timerId, task, completed, priority, createdAt };
            return Tasks.insert(newTask);
        }
    });

    Meteor.methods({
        'tasks.toggle.completed'(taskId) {
            check(taskId, String);
            let task = Tasks.findOne(taskId);
            task.completed = !task.completed;
            return Tasks.update({ _id: taskId }, task);
        }
    });

    Meteor.methods({
        'tasks.set.priority'(taskId, priority) {
            check(taskId, String);
            check(priority, Number);
            let task = Tasks.findOne(taskId);
            task.priority = priority;
            return Tasks.update({ _id: taskId }, task);
        }
    });

    Meteor.methods({
        'tasks.remove'(taskId) {
            check(taskId, String);
            return Tasks.remove(taskId);
        }
    });
};
