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
Router.route('/adminDash', {
    path: '/adminDash/:_id',
    template: 'userDash',
    // layoutTemplate: null,
    data: function(){
        return Meteor.users.findOne({_id:this.params._id});
    }
});
Router.route('/playList', {
    path: 'playList/:_id',
    template: 'playList',
    // layoutTemplate: null,
    waitOn: function(){
        return [
            Meteor.subscribe('requests'),
            Meteor.subscribe('createSessionUser')
        ];
    },
});
Router.route('/userDash', {
    path: '/userDash/:_id',
    template: 'userDash',
    // layoutTemplate: null,
    waitOn: function(){
        return [
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
    // layoutTemplate: null,
});
Router.route('/adminReg', {
    path: 'adminReg',
    template: 'adminReg',

});
Router.route('/admin', {
    path: 'admin',
    template: 'admin',
    // layoutTemplate: null,

});
Router.route('/logout', {
    path: 'logout',
    template: 'logout',
    // layoutTemplate: null,

});


