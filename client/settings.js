import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './settings.html';

import { SessionId } from '../imports/api/sessionId.js';
import { Requests } from '../imports/api/requests.js';


Template.settings.onCreated( function(){

});
Template.settings.rendered = function(){

};

Template.settings.helpers({
    showSessionId() {
        return SessionId.find({}, {sort:{"createdAt": -1}});
    }
});

Template.settings.events({
    'click #createSessionId': function(e){
        var num = Math.floor(Math.random() * 90000) + 10000;

        const sessionId ={
            barName: 'HMC',
            createdAt: new Date(),
            sId: num
        };
        const oldSessionId = SessionId.findOne({}, {sort:{'createdAt': -1}})._id;

        Meteor.call('createSessionId', sessionId, function(err, result){
            Meteor.call('deleteOldSessionId', oldSessionId, function(err, result){});
        });


        // const currentCreatedAt= SessionId.find({}, {sort:{"createdAt": -1}}).fetch()[0].createdAt;
        // const now = new Date();
        // console.log('currentId', SessionId.find({}, {sort:{"createdAt": -1}}).fetch()[0].sId);
        // if (now > currentCreatedAt) {
        //     alert("now is greater");
        // }


    }
});