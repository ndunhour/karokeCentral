Template.logout.created = function(){
};

Template.logout.rendered = function(){

};

Template.logout.helpers({

});

Template.logout.events({
    'click .cancelLogout': function(e){
        // if(Meteor.users.find().count() > 0){
        //     Router.go('/adminDash/' + Meteor.userId());
        // }else{
        //     Router.go('/userDash');
        // }
    },
    'click .yesLogout': function(e){
        // Meteor.logout();
        // Router.go('/');
    }
});