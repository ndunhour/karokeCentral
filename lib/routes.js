Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', {
    name: 'signIn',
    template: 'signIn',
    waitOn: function(){
        return [
            Meteor.subscribe('sessionId'),
            Meteor.subscribe('bars')
        ];
    },
});
Router.route('/adminDash', {
    path: '/adminDash/:_id',
    template: 'userDash',
    data: function(){
        return Meteor.users.findOne({_id:this.params._id});
    }
});
Router.route('/playList', {
    name: 'playList',
    template: 'playList',
    waitOn: function(){
        return [
            Meteor.subscribe('requests')
        ];
    },

});
Router.route('/userDash', {
    name: 'userDash',
    template: 'userDash',
    data: function(){
        return Meteor.users.findOne({_id:this.params._id});
    }

});
Router.route('/settings', {
    name: 'settings',
    template: 'settings',
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

