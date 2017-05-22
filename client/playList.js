import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './playList.html';

import { Requests } from '../imports/api/requests.js';


Template.playList.created = function(){

};

Template.playList.rendered = function(){

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

Template.playList.helpers({
    showRequests() {
        return Requests.find({});
    },
    work() {
        if(Meteor.users.find().count() === 0){
            return 'none';
        }else{
            return 'block';
        }

    }

});

Template.playList.events({
    'click #deleteSong': function(event, template){
        event.preventDefault();
        const deleteSong = event.target.parentNode.id;
        Session.set('deleteSong', deleteSong);
        if(Meteor.users.find().count() > 0){
            $('.confirm').css('display', 'block');
        }
    },
    'click .cancelBtn': function(event, template){
        event.preventDefault();
        $('.confirm').css('display', 'none');
        $('.playlist').css('display', 'block');
    },
    'click .confirmDelete': function(e, t){
        e.preventDefault();
        console.log('click')
        Meteor.call('deleteSong', Session.get('deleteSong'), function(err){
            if(err){
                console.log(err.reason);
            }
            $('.confirm').css('display', 'none');
            // $('.playlist').css('display', 'block');
        });
    }


});