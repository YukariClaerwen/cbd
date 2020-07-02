$(document).ready(function () {
    'use strict';
    var c, currentScrollTop = 0,
        navbar = $('nav').not('.products-nav');
    if ($(window).scrollTop() > 200) {
        navbar.addClass('scrollDown');
    }
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
    
    $(".input").each(function(){
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

    
    $(document).click(function(){
        $('.shopping-desc').hide();
    })

    
    $("a[href='#']").click(function() {
        navbar.removeClass('scrollUp');
        navbar.find("button").addClass('btn-border');
        $(".topbtn").css({
            'visibility' : 'hidden',
            'opacity': 0
        });
    });
    // deleteObj("localUserList")
    if(CheckExistLocal("user")) {
        var user = getDataFromLocal("user");
        $("#taikhoan").show();
        $("#loginDiv").hide();
        $("#showTen").text(user.hoten);
    }
    $("#btnDangXuat").click(function(){
        deleteObj("user");
        $("#taikhoan").hide();
        $("#loginDiv").show();
    })
    
    $(".chitiet").each(function(){
        $(this).click(function(){
            deleteObj("SanPham");
            var id = $(this).attr("data-id");
            var sp = new SanPham();
            for (var i = 0; i < listSP.DS.length; i++){
                if(id == listSP.DS[i].id) {
                    sp.id = listSP.DS[i].id;
                    sp.ten = listSP.DS[i].ten;
                    sp.giaS = listSP.DS[i].giaS;
                    sp.giaG = listSP.DS[i].giaG;
                    sp.img = listSP.DS[i].img;
                    // sp.topping = null;
                    break;
                }
            }
            SaveLocalStorage(sp, "SanPham");
        })
    })
    
    var gh = getDataFromLocal("localGioHang");
    if(gh.length > 0) {
        $('.shopping-desc > p').hide();
        $('.shopping-desc div').show().find("p").hide();
        
    $("#amount").attr("data-soluong", gh.length).text(gh.length);
    }
});

function PriceFormat(price, currency){
    return "<span>" + parseFloat(price, 10).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").toString() + "</span><span>" + currency + "</span>";
}
