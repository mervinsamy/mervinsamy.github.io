"use strict";

$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top
         }, 900, 'swing', function () {
             window.location.hash = target;
         });

        /*Navbar bottom area change color*/
         if ($(".navbar-nav li:nth-child(1)").hasClass("active")){
           $(".navbar-nav>li, .navbar-nav").css("border-bottom-color", "rgb(127,145,130)")
          }

         if ($(".navbar-nav li:nth-child(2)").hasClass("active")){
           $(".navbar-nav>li, .navbar-nav").css("border-bottom-color", "rgb(139,111,134)")
          }

         if ($(".navbar-nav li:nth-child(3)").hasClass("active")){
           $(".navbar-nav>li, .navbar-nav").css("border-bottom-color", "rgb(101,105,116)")
          }
     });

   var typed = new Typed('#typed', {
    strings: [ "WEB DEVELOPER.",
               "WEB DESIGNER.",
               "SOFTWARE ENGINEER."],
    typeSpeed: 30,
    backSpeed: 0,
    loop: true

    });

   $('.navbar').affix({
      offset: {
        top: $('#home').outerHeight()
      }
   }); 


    /*Temp Fix*/
      /* $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() < 601) {
          $('.navbar-nav').removeClass('navbar-fixed-top');
          $('.navbar-nav').removeAttr('navbar-fixed-top');
          }
        if ($(window).scrollTop() > 600) {
          $('.navbar-nav').addClass('navbar-fixed-top');
        } 
    });*/

    $(window).scroll(function(){
         if ($(".navbar-nav li:nth-child(1)").hasClass("active")){
           $(".navbar-nav>li, .navbar-nav").css("border-bottom-color", "rgb(127,145,130)")
          }

         if ($(".navbar-nav li:nth-child(2)").hasClass("active")){
           $(".navbar-nav>li, .navbar-nav").css("border-bottom-color", "rgb(139,111,134)")
          }

         if ($(".navbar-nav li:nth-child(3)").hasClass("active")){
           $(".navbar-nav>li, .navbar-nav").css("border-bottom-color", "rgb(101,105,116)")
          }

        var fromTop = $(window).scrollTop();
        console.log(fromTop);
        if (($(window).width() < 768) && (fromTop >= 300)) {
          console.log('pasok');
          /*$("#about").css('padding-top' , '125px');*/
          $(".spacer").addClass('spacer-on');
          $("#about").addClass('padding-scroll-m');
        } 
        else if (($(window).width() >= 768 && $(window).width() < 1024) && (fromTop >= 600)) {
          console.log('pasok 768');
          
          $(".spacer").addClass('spacer-on');
          $("#about").addClass('padding-scroll-m');
        }
        else {
          console.log('labas');
          $(".spacer").removeClass('spacer-on');
          $("#about").removeClass('padding-scroll-m');
        }

        /*
        if (($(window).width() > 768) && (fromTop >= 500)) {
          console.log('pasok');
          
          $(".spacer").addClass('spacer-on');
          $("#about").addClass('padding-scroll-m');
        } else {
          $(".spacer").removeClass('spacer-on');
          $("#about").removeClass('padding-scroll-m');
        }*/

    });



    /*$.ajax({
      url: "https://formspree.io/rionyamato@yahoo.com", 
      method: "POST",
      data: {message: "hello!"},
      dataType: "json"
    });*/


     var pathname = window.location.pathname;
     console.log("pathname: " + pathname);
 });

