import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';

import './playList.html';

import { Requests } from '../imports/api/requests.js';
import { CreateSessionUser } from '../imports/api/createSessionUser.js';



Template.playList.created = function(){
    this.userId = new ReactiveVar('');

    const split = window.location.pathname.split('/').slice(2)[0];
    this.userId.set(split);
};

Template.playList.rendered = function(){

};

Template.playList.helpers({
    showRequests() {
        return Requests.find({});
    },
});

Template.playList.events({
    'click #playListRow': function(e, template){
        e.preventDefault();
        const deleteSong = e.currentTarget.children[1].children.id.textContent;
        Session.set('deleteSong', deleteSong);
        if(Meteor.users.findOne({_id: template.userId.get()})){
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