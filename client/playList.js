import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './playList.html';

import { Requests } from '../imports/api/requests.js';


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
    'click .confirmBtn': function(event, template){
        event.preventDefault();
        const findCustId = Requests.findOne({_id: event.target.id});
        Session.set('songId', findCustId.songId);
        $('.confirm').css('display', 'block');
        $('.playlist').css('display', 'none');
    },
    'click .deleteSongBtn': function(event, template){
        event.preventDefault();
        if(Meteor.users.find().count() > 0){
            Meteor.call('deleteSong', Session.get('songId'), function(err){
                if(err){
                    console.log(err.reason);
                }
                $('.confirm').css('display', 'none');
                $('.playlist').css('display', 'block');
            });
        }
    },
    'click .cancelBtn': function(event, template){
        event.preventDefault();
        $('.confirm').css('display', 'none');
        $('.playlist').css('display', 'block');
    },

});