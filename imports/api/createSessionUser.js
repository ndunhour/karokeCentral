import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const CreateSessionUser = new Mongo.Collection('createSessionUser');

if (Meteor.isServer) {

    Meteor.publish('createSessionUser', function() {
        return CreateSessionUser.find({});
    });
}

Meteor.methods({
    'createSessionUser': function(createSessionUser){
        return CreateSessionUser.insert(createSessionUser);
    },
    'deleteSession': function(userSession){
        return CreateSessionUser.remove({_id:userSession});
    }
});