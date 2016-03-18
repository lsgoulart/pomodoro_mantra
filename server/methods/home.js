import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
    Meteor.methods({
        'home.create.timer'(type) {
            check(type, String);

            const createdAt = new Date();
            const time = (type === 'break') ? (60*25)*1000 : (60*5)*1000;
            const owner = Meteor.userId();
            const counting = false;
            const timer = {owner, type, time, counting, createdAt};
            const id = Timer.insert(timer);
            return id;
        }
    });
}
