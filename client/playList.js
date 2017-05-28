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

});

Template.playList.events({
    'click #playListRow': function(e, t){
        e.preventDefault();
        const deleteSong = e.currentTarget.children[1].children.id.textContent;
        Session.set('deleteSong', deleteSong);
        if(Meteor.users.find().count() > 0){
            $('.confirmModal').css('display', 'block');
        }
    },
    'click .cancelBtn': function(e, t){
        e.preventDefault();
        $('.confirm').css('display', 'none');
        $('.playlist').css('display', 'block');
    },
    'click .confirmDelete': function(e, t){
        e.preventDefault();
        Meteor.call('deleteSong', Session.get('deleteSong'), function(err){
            if(err){
                console.log(err.reason);
            }
            $('.confirmModal').css('display', 'none');
        });
    }


});