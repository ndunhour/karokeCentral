import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './nav.html';
import './nav.css';

Template.nav.onCreated( function() {

});

Template.nav.rendered = function(){
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


Template.nav.helpers({
    user: function(){
        if(Meteor.users.find().count() === 0){
            return '/userDash';
        }else{
            return '/adminDash/' + Meteor.userId();
        }
    },
});

Template.nav.events({
    'click .confirmLogout': function(e){
        event.preventDefault();
        Router.go('/logOut');
    },
});


