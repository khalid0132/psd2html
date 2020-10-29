
$(function(){
    
    //back2top variable declare
    var html_body = $('html,body');
    var back2top = $('.back2top');
    
    back2top.click(function(){
        html_body.animate({scrollTop:0},800);
    });
 
    // testimonial slide
    $('.testimonial_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });
    
    //scrolling;
    $(window).scroll(function(){
        
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 300){
           $('.navbar').addClass("bg");
        }
        else{
            $('.navbar').removeClass("bg");
        }

        if(scrolling > 300){
            back2top.show(1500);
        }  
        else{
            back2top.hide(1500);
        }
        
    });
    
    //Banner slider
    $('.banner_slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    });
    
    //animation scroll js
    $('.navbar-nav .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1200);
                return false;
            }
        }
    });
    
    // slick slider boss section
    $('.boss_slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    });
    
    


});