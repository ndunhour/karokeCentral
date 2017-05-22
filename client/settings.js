import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './settings.html';

import { SessionId } from '../imports/api/sessionId.js';
import { Requests } from '../imports/api/requests.js';
import { Bars } from '../imports/api/bars.js';


Template.settings.onCreated( function(){

});
Template.settings.rendered = function(){
    // if(Meteor.users.find().count() === 0){
    //     $('#settingLI').hide();
    // }

    // var something = window.document.getElementById('something');

    // var mc = new Hammer(something);

    // if(Router.current().route._path === '/userDash' || '/adminDash/' + Meteor.userId()){
    //     mc.on("panright drag", function(ev) {
    //         Router.go('/playList');
    //     });
    //     mc.on("panleft drag", function(ev) {
    //         Router.go('/logout');
    //     });

    //     if(Meteor.users.find().count() > 0){
    //         mc.on("panleft drag", function(ev) {
    //             Router.go('/settings');
    //         });
    //     }
    // }

    // if(Router.current().route._path === '/playList'){
    //     if(Meteor.users.find().count() === 0){
    //         mc.on("panright drag", function(ev) {
    //             Router.go('/logout');

    //         });
    //         mc.on("panleft drag", function(ev) {
    //             Router.go('/userDash');
    //         });

    //     }else{
    //         mc.on("panright drag", function(ev) {
    //             Router.go('/settings');

    //         });
    //         mc.on("panleft drag", function(ev) {
    //             Router.go('/adminDash/' + Meteor.userId());
    //         });
    //     }

    // }

    // if(Router.current().route._path === '/settings'){
    //     // if(Meteor.users.find().count() > 0){
    //         mc.on("panright", function(ev) {
    //             Router.go('/logout');
    //         });
    //         mc.on("panleft", function(ev) {
    //             Router.go('/playList');
    //         });
    //     // }
    // }
};

Template.settings.helpers({
    showSessionId() {
        return SessionId.find({}, {sort:{"createdAt": -1}});
    }
});

Template.settings.events({
    'click #createSessionId': function(e){
        const num = Math.floor(Math.random() * 90000) + 10000;

        const sessionId ={
            barName: 'HMC',
            createdAt: new Date().toLocaleString(),
            sId: num
        };
        const oldSessionId = SessionId.findOne({}, {sort:{'createdAt': -1}})._id;

        Meteor.call('createSessionId', sessionId, function(err, result){
            Meteor.call('deleteOldSessionId', oldSessionId, function(err, result){});
        });
    },


    // save to add new bars
    // 'click #createBar': function(e){
    //     const bar = {
    //         barName: 'Club Chance',
    //         createdAt: new Date()
    //     };

    //     Meteor.call('createBar', bar, function(err, result){
    //         console.log(result);
    //     });
    // }
});