import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './nav.html';
import './nav.css';

Template.nav.onCreated( function() {
  this.currentTab = new ReactiveVar( "searchfield" );
});

Template.nav.helpers({
    tab: function() {
        return Template.instance().currentTab.get();
    },
    // admin: function(){
    //     if(Router.current().route._path ==="/adminDash" || "/settings"){
    //         return "block";
    //     }else{
    //         return "none";
    //     }
    // }

});

Template.nav.events({
    'click .searchSongs': function(e){
        event.preventDefault();
        console.log('searchSongs');
    },
    'click .playList': function(e){
        event.preventDefault();
        console.log('playList');
    },
    'click .nav-pills li': function( event, template ) {
        var currentTab = $( event.target ).closest( "li" );

        currentTab.addClass( "active" );
        $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

        template.currentTab.set( currentTab.data( "template" ) );
    }
});