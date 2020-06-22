$(document).ready(function () {
    'use strict';
    var c, currentScrollTop = 0,
        navbar = $('nav').not('.products-nav');
  
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;
        navbar.find('.show').each(function(){
            $(this).removeClass('show');
        })
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp").removeClass('scrollDown');
            navbar.find("button").removeClass('btn-border');
            $(".topbtn").css({
                'visibility': 'visible',
                'opacity': 1
            });
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.addClass('scrollDown').removeClass("scrollUp");
        } else if (a < b) {
            navbar.removeClass('scrollDown');
            navbar.find("button").addClass('btn-border');
            $(".topbtn").css({
                'visibility' : 'hidden',
                'opacity': 0
            });
        }
        c = currentScrollTop;
    });

    navbar.find('.navbar-toggler').click(function(){
        var menu = navbar.find('.navbar-collapse');
        if (menu.hasClass('show')){
            navbar.removeClass('scrollDown');
        } else {
            navbar.addClass('scrollDown');
        }
    })

    // var nav_h = navbar.outerHeight();
    // $('.blog-nav').next('div').css({
    //   'margin-top': nav_h
    // })
    // $('.section-banner').css({
    //   'padding-top': nav_h + 25
    // })
    // $('.sticky-top').css({
    //   top: nav_h + 15
    // })

    
    $("input").each(function(){
        if ($(this).val().trim() != "") {
            $(this).addClass('has-val');
        } else {
            $(this).removeClass('has-val');
        }
        $(this).blur(function(){
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })

    var prodNavH = $('.products-nav').height();

    $('.footer').css({
        'margin-bottom': prodNavH
    })
});

