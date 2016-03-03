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
