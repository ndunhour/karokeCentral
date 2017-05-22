import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './userDash.html';

Template.userDash.onCreated( function(){

});

Template.userDash.rendered = function(){
    if(Meteor.users.find().count() === 0){
        $('#settingLI').hide();
    }

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
