import '../imports/startup/accounts-config.js';

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

