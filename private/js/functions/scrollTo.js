'use strict';

export default function(trigger){

  $(trigger).each(function(){

    $(this).click(function(){
        var destination = $(this).data('scroll');

        if(isNaN(destination)) {
          //si la destination n'est pas un nombre on scroll jusqu'a un element en particulier
          var destination = $(destination).offset().top;

        }

        $('html, body').animate({scrollTop : destination},800);

        return false;
    });
  });
}
