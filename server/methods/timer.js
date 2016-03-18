import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
    Meteor.methods({
        'timer.set'(timerId, time) {
            check(timerId, String);
            check(time, Number);

            const timer = Timer.findOne(timerId);
            timer.time = time;

            Timer.update({_id: timerId}, timer);
        }
    });

    Meteor.methods({
        'timer.counting'(timerId, counting) {
            check(timerId, String);
            check(counting, Boolean);

            const timer = Timer.findOne(timerId);
            timer.counting = counting;

            Timer.update({_id: timerId}, timer);
        }
    });
}
