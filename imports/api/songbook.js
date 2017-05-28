import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Songbook = new Mongo.Collection('songbook');

if (Meteor.isServer) {
  // This code only runs on the server
    if (Songbook.find().count() === 0){
        const insertSongbook = [
             {
               "ID": 50130,
               "Title": "Sorry",
               "Artist": "Justin Bieber",
               "Year": 2015,
               "Styles": "Pop,Dance"
             },
             {
               "ID": 45218,
               "Title": "Happy",
               "Artist": "Pharrell Williams",
               "Year": 2013,
               "Styles": "Funk,Soul,Pop,TV & movie soundtrack"
             },
             {
               "ID": 50623,
               "Title": "Lost Boy",
               "Artist": "Ruth B",
               "Year": 2015,
               "Styles": "Pop"
             },
             {
               "ID": 49067,
               "Title": "Ex's & Oh's",
               "Artist": "Elle King",
               "Year": 2014,
               "Styles": "Rock,Alternative"
             },
             {
               "ID": 12617,
               "Title": "Bohemian Rhapsody",
               "Artist": "Queen",
               "Year": 1975,
               "Styles": "Rock"
             },
             {
               "ID": 11426,
               "Title": "Summer Nights",
               "Artist": "Grease",
               "Year": 1978,
               "Styles": "TV & movie soundtrack,Rock 'n Roll,Pop,Oldies,Duet"
             },
             {
               "ID": 5062,
               "Title": "La Bamba",
               "Artist": "Mexican Traditional",
               "Year": 1600,
               "Styles": "Latin,Traditionnal"
             },
             {
               "ID": 5476,
               "Title": "Ring Of Fire",
               "Artist": "Johnny Cash",
               "Year": 1963,
               "Styles": "Country,Rock 'n Roll"
             },
             {
               "ID": 47571,
               "Title": "Andalouse",
               "Artist": "Kendji Girac",
               "Year": 2014,
               "Styles": "French pop,Electro,Latin"
             },
             {
               "ID": 50688,
               "Title": "Work",
               "Artist": "Rihanna",
               "Year": 2016,
               "Styles": "Pop,R&B"
             },
             {
               "ID": 35287,
               "Title": "Rolling In The Deep",
               "Artist": "Adele",
               "Year": 2010,
               "Styles": "Pop,Soul"
             },
             {
               "ID": 48669,
               "Title": "Like I'm Gonna Lose You",
               "Artist": "Meghan Trainor",
               "Year": 2015,
               "Styles": "Pop,R&B,Soul,Duet"
             },
             {
               "ID": 36600,
               "Title": "Can't Help Falling In Love",
               "Artist": "Elvis Presley",
               "Year": 1961,
               "Styles": "Pop,Soul,Oldies,Love"
             },
             {
               "ID": 48523,
               "Title": "Shut Up And Dance",
               "Artist": "Walk The Moon",
               "Year": 2014,
               "Styles": "Pop,Rock,Dance"
             },
             {
               "ID": 21496,
               "Title": "Make You Feel My Love",
               "Artist": "Adele",
               "Year": 2008,
               "Styles": "Soul,Pop"
             },
             {
               "ID": 38671,
               "Title": "A Thousand Years",
               "Artist": "Christina Perri",
               "Year": 2011,
               "Styles": "Pop,TV & movie soundtrack"
             },
             {
               "ID": 5777,
               "Title": "The Rose",
               "Artist": "Bette Midler",
               "Year": 1979,
               "Styles": "TV & movie soundtrack,Pop"
             },
             {
               "ID": 9066,
               "Title": "My Girl",
               "Artist": "The Temptations",
               "Year": 1965,
               "Styles": "Soul,Pop,Oldies"
             },
             {
               "ID": 50668,
               "Title": "Die Immer Lacht",
               "Artist": "Stereoact",
               "Year": 2015,
               "Styles": "Schlager,Dance,Electro"
             },
             {
               "ID": 5103,
               "Title": "My Way",
               "Artist": "Frank Sinatra",
               "Year": 1969,
               "Styles": "Oldies"
             },
             {
               "ID": 21608,
               "Title": "Hallelujah",
               "Artist": "Alexandra Burke",
               "Year": 2008,
               "Styles": "Pop"
             },

        ];
        for(i=0; i<insertSongbook.length; i++){
            Songbook.insert(insertSongbook[i]);
        }
    }
    Meteor.publish('songbook', function() {
        return Songbook.find({});
    });
}

Meteor.methods({
    'songbookList': function(songs){
        return Songbook.insert(songs);
    }
});