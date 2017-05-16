import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Mongo } from 'meteor/mongo';

import { Requests } from '../api/requests.js';

import './searchfield.js';
import './body.html';
import './nav.js';
import './playList.js';

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('requests');
});

Template.body.helpers({

});

Template.body.events({

});