import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './userDash.html';
import './userDash.css';


Template.userDash.onCreated( function(){

});

Template.userDash.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
  showList() {
    return Session.get('songList');
  },
});

Template.userDash.events({
    'submit .searchfield': function(event){
        event.preventDefault();
        const searchValue = event.target[0].value;

        Session.set('searchValue', searchValue);

        Meteor.call('findSong', Session.get('searchValue'), songs, function(err, result){
            Session.set('songList', result);
            const makeList = Session.get('songList').map(list => {

                const regex = new RegExp(Session.get('searchValue', 'gi'));
                const artist = list.Artist.replace(regex, function(match){
                    Session.set('songId', list.ID);
                    return makeList;
                });
            });

        });
        $('.inputField').val('');
    },
    'click tr': function(e){
        const artist = e.currentTarget.children[0].outerText;
        const title = e.currentTarget.children[1].outerText;
        const songId = e.currentTarget.children[2].outerText;


        $('.requestBox').text(title + " has been requested for you")
            .fadeIn(800)
            .delay(1500)
            .fadeOut(500);

        const request = {
            artist,
            title,
            songId,
            createdAt: new Date(),
            owner: Meteor.userId(),
        };

        Meteor.call('requestSong', request, function(err, result){
        }) ;

    },

});
