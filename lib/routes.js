Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', {
    name: 'signIn',
    template: 'signIn',
    waitOn: function(){
        return [
            Meteor.subscribe('sessionId'),
            Meteor.subscribe('bars'),
            Meteor.subscribe('createSessionUser')
        ];
    },
});
Router.route('/userDash', {
    path: '/userDash/:_id',
    template: 'userDash',
    waitOn: function(){
        return [
            Meteor.subscribe('createSessionUser'),
        ];
    },

});
Router.route('/adminDash', {
    path: '/adminDash/:_id',
    template: 'userDash',
    data: function(){
        return Meteor.users.findOne({_id:this.params._id});
    },
    waitOn: function(){
        return [
            Meteor.subscribe('createSessionUser'),
        ];
    },
});
Router.route('/playList', {
    path: 'playList/:_id',
    template: 'playList',
    waitOn: function(){
        return [
            Meteor.subscribe('requests'),
            Meteor.subscribe('createSessionUser')
        ];
    },
});
Router.route('/settings', {
    path: '/settings/:id',
    template: 'settings',
        waitOn: function(){
        return [
            Meteor.subscribe('createSessionUser'),
            Meteor.subscribe('sessionId'),

        ];
    },
    data: function(){
        return Meteor.users.findOne({_id:this.params._id});
    }

});
Router.route('/adminReg', {
    path: 'adminReg',
    template: 'adminReg',

});
Router.route('/admin', {
    path: 'admin',
    template: 'admin',


});
Router.route('/logout', {
    path: 'logout',
    template: 'logout',


});


