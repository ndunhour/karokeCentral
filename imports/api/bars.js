import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Bars = new Mongo.Collection('bars');

if (Meteor.isServer) {
  // This code only runs on the server
    // if (Bars.find().count() === 0){
    //     const insertBars = [
    //         {
    //             barName: 'HMC',
    //             createdAt: new Date()
    //         },
    //         {
    //             barName: 'Aiea Bowl',
    //             createdAt: new Date()
    //         },
    //         {
    //             barName: 'Club Chance',
    //             createdAt: new Date()
    //         },

    //     ];
    //     for(i=0; i<insertBars.length; i++){
    //         Bars.insert(insertBars[i]);
    //     }
    // }
    Meteor.publish('bars', function() {
        return Bars.find({});
    });
}

Meteor.methods({
    'createBar': function(bar){
        return Bars.insert(bar);
    }
});