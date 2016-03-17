/**
 * Created by IngeGerda on 19.02.2016.
 */
//******Scroll*****//
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});
//******add class Active*****//
$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
//******add class navbar-solid*****//
jQuery(function($) {
    $(window).scroll(function(){
        if($(window).scrollTop() >50) {
            $('.navbar').addClass("navbar-solid");
        }else {
            $('.navbar').removeClass("navbar-solid");
        }
    });
});