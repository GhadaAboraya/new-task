$(document).ready(function() {
    /* scroll for navbar */
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop() >= 80){
            $(".navbar-default").addClass("scroll-nav");
        } else {
            $(".navbar-default").removeClass("scroll-nav");
        }
    });


    /*testimonials*/
    $('.carousel').carousel();

    
})