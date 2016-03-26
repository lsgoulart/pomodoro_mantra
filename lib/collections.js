import {Mongo} from 'meteor/mongo';

export const Timer = new Mongo.Collection('timer');
export const Tasks = new Mongo.Collection('tasks');
