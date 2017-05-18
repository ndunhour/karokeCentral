Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', {
    name: 'signIn',
    template: 'signIn',
    waitOn: function(){
        return [
            Meteor.subscribe('sessionId'),
        ];
    },
});
Router.route('/adminDash', {
    name: 'adminDash',
    template: 'adminDash'

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
    template: 'userDash'

});
Router.route('/signin', {
    name: 'signin',
    template: 'signin'
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


