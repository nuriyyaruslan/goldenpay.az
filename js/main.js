$(document).ready(function () {
    if($(document).width()<1023){
        $('.row.content').css('padding-top', $('.about-header').outerHeight(true) );
    }

    if($( document ).width()>1023){
        $('.row.content').css('padding-top', $('.about-header').outerHeight(true) );
        function menuChange() {
            if ($(this).scrollTop() > 64) {
                $('.fixed-sub-menu').show();
                $('.about-btn_s').hide();
                $('.header-left').addClass('menu-height');
                $('.header-right').addClass('right-height');
            }else{
                $('.fixed-sub-menu').hide();
                $('.about-btn_s').show();
                $('.header-left').removeClass('menu-height');
                $('.header-right').removeClass('right-height');
            }
        }
        menuChange();
        $(window).scroll(function(){
            menuChange();
        });
    }

    //to go current part of the page section
    var navTopPosition = 0;
    $(document).on("click", ".about-item", function (e) {
        e.preventDefault();
        var id = $(this).attr("target");
        $('html, body').animate({
            scrollTop: $(id).offset().top - $(id).height() - 40
        },480);
    });

    $(document).on("click", ".about-item-1", function (e) {
        e.preventDefault();
        var id = $(this).attr("target");
        $('.about-item.active').removeClass('active');
        $('.about-item[target="'+id+'"]').addClass('active');
        $('html, body').animate({
            scrollTop: $(id).offset().top - $(id).height() - 130
        },480);
    });

    //menu actions
    $('.menu-full').hide();
    $('.mob_soc').hide();
    $('.menu-icon').click(function(){

        if($('.menu-full').is(':hidden')) {
            $('.menu-icon img').attr('src','img/icons/ic_close_black_24px.svg');
            $('.menu-full').fadeIn();
            $('.menu span').hide();
            $('.call-icon').hide();
            $('.mob_soc').show();
        }else{
            $('.menu-icon img').attr('src','img/icons/menu.svg');
            $('.menu-full').fadeOut();
            $('.menu span').show();
            $('.call-icon').show();
            $('.mob_soc').hide();
        }
    });

   if($(document).width()<=768){
       var menuHeight=$('.about-header').height()+10;
       $('.menu-full').css('top',menuHeight);
    }


    /*change img src*/
    $('.img-item').mouseover(function () {
        var whiteImage=$(this).attr('white-image');
        $(this).children().attr('src',whiteImage);
    }).mouseleave(function () {
        var blackImage=$(this).attr('black-image');
        $(this).children().attr('src',blackImage);
    })



    $('#modal-pay').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 20,
            outDuration: 20,
            ready: function(modal, trigger) {
                $('.pay-carousel').show();
                $('.pay-expand').hide();
            }
        }
    );
    $(document).on('click','.p-lr a',function () {
        $('#modal-pay').modal('close');
    })

    var carousel= $('.owl-carousel');
    carousel.owlCarousel({
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.pay-carousel .owl-nav .owl-prev').html('<i class="mdi mdi-chevron-left"></i>');
    $('.pay-carousel .owl-nav .owl-next').html('<i class="mdi mdi-chevron-right"></i>');

    $(document).on('click','.pay-item a',function () {
        $('.pay-carousel').hide();
        $('.pay-expand').show();
    })
    $(document).on('click','.back-pay-btn a',function () {
        $('.pay-carousel').show();
        $('.pay-expand').hide();
    })

    $(document).on('click','.fixed-sub-menu a.about-item',function () {
        $('.fixed-sub-menu a.about-item.active').removeClass('active');
        $(this).addClass('active');
    })

})