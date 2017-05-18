import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const SessionId = new Mongo.Collection('sessionId');

if (Meteor.isServer) {
  // This code only runs on the server
    Meteor.publish('sessionId', function sessionIdPublication() {
        return SessionId.find({});
    });
}

Meteor.methods({
    'createSessionId': function(sessionId) {
        return SessionId.insert(sessionId);
    },

});
