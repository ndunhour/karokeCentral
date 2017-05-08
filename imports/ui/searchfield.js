import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './searchfield.html';

Template.searchfield.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.searchfield.events({
  'keyup .searchfield'(event){
    console.log(event.key);
  }
});