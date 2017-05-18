import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './adminReg.html';

Template.adminReg.created = function(){
};

Template.adminReg.rendered = function(){
};

Template.adminReg.helpers({

});

Template.adminReg.events({
    'click #adminReg': function(e){
        event.preventDefault();
        const usernameReg = $('#text').val();
        const pw1 = $('#pw1').val();
        const pw2 = $('#pw2').val();

        if( pw1 === pw2) {
            Accounts.createUser({
                username: usernameReg,
                password: pw1
            }, function(error){
                    if(error){
                        console.log(error.reason);
                    } else {
                        Router.go('/adminDash');
                    }
                });

        }else{
            $('p').show()
            .text("Passwords do not match")
            .fadeIn(800)
            .delay(1500)
            .fadeOut(500);
        }

    }

});