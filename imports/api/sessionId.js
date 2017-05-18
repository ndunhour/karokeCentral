import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const SessionId = new Mongo.Collection('sessionId');

// Meteor.autorun(function(){
//     Meteor.startup(function(){
//         if(SessionId.find().count() === 0){


//         }

//     });
// });

if (Meteor.isServer) {
    if(SessionId.find().count() === 0){
        console.log('session count', SessionId.find().count());
        var num = Math.floor(Math.random() * 90000) + 10000;

        const startUpSessionId ={
            barName: 'HMC',
            createdAt: new Date(),
            sId: num
        };
        console.log(startUpSessionId);
        // Meteor.call('createStartupSessionId', startUpSessionId, function(err, result){
        //     console.log('in startup');
        // });
        SessionId.insert(startUpSessionId);
    }else{
        console.log('fuck');
    }
  // This code only runs on the server
    Meteor.publish('sessionId', function sessionIdPublication() {
        return SessionId.find({});
    });

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
