Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', {
    template: 'signIn'
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
Router.route('/searchfield', {
    name: 'searchfield',
    template: 'searchfield'

});
Router.route('/signin', {
    name: 'signin',
    template: 'signin'
});



