import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './playList.html';

import { Requests } from '../imports/api/requests.js';
import { CreateSessionUser } from '../imports/api/createSessionUser.js';



Template.playList.created = function(){

};

Template.playList.rendered = function(){

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