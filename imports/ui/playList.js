import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './playList.html';

import { Requests } from '../api/requests.js';


Template.playList.created = function(){
    Meteor.subscribe('requests');
};

Template.playList.rendered = function(){
};

Template.playList.helpers({
    showRequests() {
        return Requests.find({});
    }

});

Template.playList.events({

});