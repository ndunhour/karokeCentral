import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';

import './nav.html';
import './nav.css';

import { CreateSessionUser } from '../imports/api/createSessionUser.js';

Template.nav.onCreated( function() {
    Meteor.subscribe('createSessionUser');
    this.showUserDash = new ReactiveVar(false);
    this.showAdminDash = new ReactiveVar(false);
    this.userId = new ReactiveVar('');

    const split = window.location.pathname.split('/').slice(2)[0];
    this.userId.set(split);
    if(Meteor.users.findOne({_id: split})){
            return this.showAdminDash.set(true);
        }else{
            return this.showUserDash.set(true);
    }
});

Template.nav.rendered = function(){

};


Template.nav.helpers({
    showUserDash(){
        return Template.instance().showUserDash.get();
    },
    showAdminDash(){
        return Template.instance().showAdminDash.get();
    },
    user(){
        if(Meteor.users.findOne({_id: Template.instance().userId.get()})){
            return '/adminDash/' + Template.instance().userId.get();
        }else{
            return '/userDash/' + Template.instance().userId.get();
        }
    },
    playList(){
        return Template.instance().userId.get();
    },
    settings(){

        return Template.instance().userId.get();

    },
});

Template.nav.events({
    'click .confirmLogout': function(e){
        event.preventDefault();
        Meteor.call('deleteSession', Session.get('userSession'), function(err, succ){});
        Router.go('/');
    },
});


