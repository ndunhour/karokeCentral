import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './adminReg.html';
import './adminReg.css';

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

        if(pw1 !== pw2){
            $('#adminRegErrMsg').show()
            .text("PASSWORDS DO NOT MATCH")
            .css("display", "block")
            .fadeIn(800)
            .delay(1500)
            .fadeOut(500);
            $('')
        }

        if( pw1 === pw2) {
            Accounts.createUser({
                username: usernameReg,
                password: pw1
            }, function(error){
                    if(error){
                        console.log(error.reason);
                        $('#adminRegErrMsg').show()
                            .text(error.reason)
                            .fadeIn(800)
                            .delay(1500)
                            .fadeOut(500);
                    } else {
                        Router.go('/adminDash/' + Meteor.userId());
                    }
                });

        }
    },
    'click #getToAdmin': function(e){
        event.preventDefault();
        if ($('#ra').val() === 'admin'){
            $('.admin').css('display','block');
            $('.adminPwd').css('display', 'none');
        }else if($('#ra').val() === ""){
            $('#raErrMsg').show()
                .text("ENTER A PASSWORD")
                .css("display", "block")
                .fadeIn(800)
                .delay(1500)
                .fadeOut(500);
        }else{
            $('#raErrMsg').show()
                .text("INCORRECT PASSWORD")
                .css("display", "block")
                .fadeIn(800)
                .delay(1500)
                .fadeOut(500);
        }
    },
    'click #adminCancel': function(e){
        e.preventDefault();
        Router.go('/');
    }

});