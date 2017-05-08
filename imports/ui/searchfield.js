import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './searchfield.html';

Template.searchfield.onCreated( function(){

})

Template.searchfield.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },

});

Template.searchfield.events({
  'submit .searchfield': function(event){
    event.preventDefault();
    const searchValue = event.target.text.value;

    Meteor.call('findSong', searchValue, songs, function(err, result){
        console.log(result);
    })

  },

});