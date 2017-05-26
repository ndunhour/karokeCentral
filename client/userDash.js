import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './userDash.html';
import './userDash.css';

Template.userDash.onCreated( function(){
});

Template.userDash.rendered = function(){

};

Template.userDash.helpers({
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
    'click #row': function(e){
        const artist = e.currentTarget.children[0].children.artist.textContent;
        const title = e.currentTarget.children[0].children.title.textContent;
        const songId = e.currentTarget.parentElement.id;

        const owner = window.location.pathname.split('/').slice(2)[0];

        $('.requestBox').text(title + " has been requested for you")
            .fadeIn(800)
            .delay(1500)
            .fadeOut(500);

        const request = {
            artist,
            title,
            songId,
            createdAt: new Date(),
            owner: owner,
        };

        Meteor.call('requestSong', request, function(err, result){
        }) ;

    },


});
