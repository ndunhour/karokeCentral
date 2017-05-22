import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './playList.html';

import { Requests } from '../imports/api/requests.js';


Template.playList.created = function(){

};

Template.playList.rendered = function(){
    // var deleteSwipe = window.document.getElementById('deleteSwipe');
    // var dS = new Hammer(deleteSwipe);
    // dS.on("drag", function(e) {
    //     if(Meteor.users.find().count() > 0){
    //         const deleteSong = e.target.parentNode.id;
    //         Meteor.call('deleteSong', deleteSong, function(err){
    //             if(err){
    //                 console.log(err.reason);
    //             }
    //             // $('.confirm').css('display', 'none');
    //             // $('.playlist').css('display', 'block');
    //         });
    //     }
    // });
    // var deletePan = window.document.getElementById('deletePan');
    // var dP = new Hammer(deletePan);
    // dR.on("panright", function(e) {
    //     console.log('pan');
    //     if(Meteor.users.find().count() > 0){
    //         const deleteIt = e.target.parentNode.id;
    //         Meteor.call('deleteSong', deleteIt, function(err){
    //             if(err){
    //                 console.log(err.reason);
    //             }
    //             // $('.confirm').css('display', 'none');
    //             // $('.playlist').css('display', 'block');
    //         });
    //     }
    // });

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