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
    name: 'settings',
    template: 'settings',
    // layoutTemplate: null,

    waitOn: function(){
        return [
            Meteor.subscribe('sessionId'),
            Meteor.subscribe('requests')
        ];
    },
});
Router.route('/adminReg', {
    name: 'adminReg',
    template: 'adminReg',

});
Router.route('/logout', {
    name: 'logout',
    template: 'logout',
    // layoutTemplate: null,

});


