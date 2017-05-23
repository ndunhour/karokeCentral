import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './nav.html';
import './nav.css';

import { CreateSessionUser } from '../imports/api/createSessionUser.js';

Template.nav.onCreated( function() {

});

Template.nav.rendered = function(){
    const split = window.location.pathname.split('/').slice(2)[0];

    Session.set('userSession', split);
    Meteor.subscribe('createSessionUser');

    if(Meteor.users.findOne({_id:Session.get('userSession')})){
            return $('.settingsTab').css("display", "block");
        }else{
            return $('.settingsTab').css("display", "none");
    }


};


Template.nav.helpers({
    user: function(){
        if(Meteor.users.find().count() === 0){
            return '/userDash/' + Session.get('userSession');
        }else{
            return '/adminDash/' + Meteor.userId();
        }
    },
    playList: function(){
        if(Meteor.users.find().count() === 0){
            return Session.get('userSession');
        }else{
            return Meteor.userId();
        }
    },
    session: function(){
        return Meteor.userId();
    }
});

Template.nav.events({
    'click .confirmLogout': function(e){
        event.preventDefault();
        Meteor.call('deleteSession', Session.get('userSession'), function(err, succ){});
        Router.go('/');
    },
});


