import '../imports/startup/accounts-config.js';
// import './main.css';

Template.main.created = function(){

};

Template.main.rendered = function(){

};

Template.main.helpers({

});

Template.main.events({
    'click .logoutBtn': function(e){
        e.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});

