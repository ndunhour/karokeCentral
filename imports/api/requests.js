import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Requests = new Mongo.Collection('requests');

if (Meteor.isServer) {
  // This code only runs on the server
    Meteor.publish('requests', function requestPublication() {
        return Requests.find({});
    });
}

Meteor.methods({
    'requestSong': function(request) {
        return Requests.insert(request);
    },
    'findSong'(songToFind, songs) {
        const filterSearch = songs.filter(function(el){
            const regex = new RegExp(songToFind, 'gi');
            return el.Title.match(regex) || el.Artist.match(regex);
        });
        return filterSearch;
    }
});
