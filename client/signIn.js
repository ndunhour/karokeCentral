import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './signIn.html';

import { SessionId } from '../imports/api/sessionId.js';



Template.signIn.created = function(){
    this.currentTab = new ReactiveVar( "adminDash" );
};

Template.signIn.rendered = function(){
};

Template.signIn.helpers({
    tab: function() {
        return Template.instance().currentTab.get();
    },
});

Template.signIn.events({
    'click #toUser': function(e){
        event.preventDefault();
        const session = $('#sessionID').val().toString();
        const currentSID = SessionId.find({}, {sort:{"createdAt": -1}}).fetch()[0].sId.toString();
        if( session === currentSID){
            Router.go('userDash');
        }else{
            $('p').show()
            .text("Invalid Session Id")
            .fadeIn(800)
            .delay(1500)
            .fadeOut(500);
        }
    },
    'click .showAdmin': function(e){
        event.preventDefault();
        $('.adminSignIn').fadeIn(800);
    },
    'click .nav-pills li': function( event, template ) {
        var currentTab = $( event.target ).closest( "li" );
        currentTab.addClass( "active" );
        $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

        template.currentTab.set( currentTab.data( "template" ) );
    },
    'click #toAdmin': function(e){
        event.preventDefault();
        const username = $('#text').val();
        const password = $('#pwd').val();

        Meteor.loginWithPassword(username, password, function(err){
            if(err){

                $('#adminErrrMsg').show()
                    .text(err.reason)
                    .fadeIn(800)
                    .delay(1500)
                    .fadeOut(500);
                $('#text').val('');
                $('#pwd').val('');
            } else {
                Router.go("/adminDash/" + Meteor.userId());
            }
        });


    },


});