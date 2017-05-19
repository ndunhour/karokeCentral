import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const SessionId = new Mongo.Collection('sessionId');

if (Meteor.isServer) {
    if(SessionId.find().count() === 0){
        var num = Math.floor(Math.random() * 90000) + 10000;

        const startUpSessionId ={
            barName: 'HMC',
            createdAt: new Date(),
            sId: num
        };

        SessionId.insert(startUpSessionId);
    }
    Meteor.publish('sessionId', function sessionIdPublication() {
        return SessionId.find({});
    });

    // const currentCreatedAt= SessionId.find({}, {sort:{"createdAt": -1}}).fetch()[0].createdAt;
    // const now = new Date();
    // console.log('currentId', SessionId.find({}, {sort:{"createdAt": -1}}).fetch()[0].sId);
    // if (now > currentCreatedAt) {
    //     alert("now is greater");
    // }

}

Meteor.methods({
    'createSessionId': function(sessionId) {
        return SessionId.insert(sessionId);
    },
    'deleteOldSessionId': function(oldSessionId) {
        return SessionId.remove(oldSessionId);
    },
    'createStartupSessionId': function(startUpSessionId) {
        return Settings.insert(startUpSessionId);
    }

});
