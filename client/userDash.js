import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';

import './userDash.html';
import './userDash.css';

import { Songbook } from '../imports/api/songbook.js';

Template.userDash.onCreated( function(){
    this.showPreList = new ReactiveVar ( true );
    this.showSearchList = new ReactiveVar ( false );
});

Template.userDash.rendered = function(){

};

Template.userDash.helpers({
    showPreList(){
        return Template.instance().showPreList.get();
    },
    showSearchList(){
        return Template.instance().showSearchList.get();
    },
    showList() {
        return Session.get('songList');
    },
    b4search() {
        return Songbook.find({});
    }

});

Template.userDash.events({
    'click .searchDB': function(event, template){
        event.preventDefault();
        const searchValue = $('.inputField').val();

        Session.set('searchValue', searchValue);

        Meteor.call('findSong', Session.get('searchValue'), songs, function(err, result){
            Session.set('songList', result);

            if(result.length !== 0){
                template.showPreList.set ( false );
                template.showSearchList.set ( true );
            }else{
                $('#errMsg').show()
                    .text(Session.get('searchValue') + " IS NOT IN SONGBOOK")
                    .css("display", "block")
                    .fadeIn(800)
                    .delay(1500)
                    .fadeOut(500);
                template.showPreList.set ( true );
                template.showSearchList.set ( false );

            }
        });
        $('.inputField').val('');
    },
    'click #resultRow': function(e){
        e.preventDefault();
        const artist = e.currentTarget.children[0].children.artist.textContent;
        const title = e.currentTarget.children[0].children.title.textContent;
        const songId = e.currentTarget.parentElement.id;

        const owner = window.location.pathname.split('/').slice(2)[0];
        $('.requestBox')
            .text(title + " has been requested for you")
            .fadeIn(800)
            .css("display", "block")
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
