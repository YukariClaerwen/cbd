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

    // format price
    $(".product-price").each(function(){
        var total = $(this).text();
        $(this).html(PriceFormat(total, " VND"));
    })

    //size
    $('input[type=radio][name=sizename]').change(function() {
        if (this.value == 'S') {
            $(".product-price").hide();
            $(".product-price[data-size=S]").show();
        }
        else if (this.value == 'G') {
            $(".product-price").hide();
            $(".product-price[data-size=G]").show();
            
        }
    });

    //số lượng
    
    $('input[name=amount]').val(1);
    $('.btn-amount').click(function(){
        var action = $(this).data('btn');
        var amount = $('input[name=amount]').val();
        if(action == 'plus')
            amount++;
        else if (action == 'minus')
            amount--;
        if (amount < 1)
            amount = 1;
        $('input[name=amount]').val(amount);
            
    })
});

function PriceFormat(price, currency){
    return "<span>" + parseFloat(price, 10).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").toString() + "</span><span>" + currency + "</span>";
}
