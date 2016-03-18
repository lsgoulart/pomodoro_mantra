import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function({Collections, Meteor, LocalState}) {
    console.log('method stubs: home');

    Meteor.methods({
        'home.create.timer'(type) {
            check(type, String);

            const createdAt = new Date();
            const time = (type === 'break') ? (60*25)*1000 : (60*5)*1000;
            const counting = false;
            const timer = {type, time, counting, createdAt};
            const id = Timer.insert(timer);
            return id;
        }
    });
}
