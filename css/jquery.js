$(function(){
    $(window).scroll(function(){
       var scroll=  $(this).scrollTop();
    if(scroll >700)
        {
            $(".navpar_s").slideDown();
        }
    else{
        $(".navpar_s").slideUp();
    }
        });
    $('.header li a').click(function(){
        $('html , body').animate(
            {
                scrollTop : $('#' + $(this).data('value')).offset().top
            }
            ,1500);
    });
});