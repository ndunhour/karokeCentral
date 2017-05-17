import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './signIn.html';

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
    'submit .signIn': function(e){
        const userSessionId = e.target.sessionID.value;

    },
    'click .showAdmin': function(e){
        event.preventDefault();
        $('.adminSignIn').fadeIn(800);
    },
    'click .nav-pills li': function( event, template ) {
        var currentTab = $( event.target ).closest( "li" );
        console.log(currentTab);
        currentTab.addClass( "active" );
        $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

        template.currentTab.set( currentTab.data( "template" ) );
    },
    'click .toAdmin': function(e){
        event.preventDefault();
        const username = $('#text').val();
        const password = $('#pwd').val();


    }

});