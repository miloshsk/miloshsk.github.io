$(document).ready(function(){
    $('.hide-menu').click(function() {
        $(this).toggleClass('active-menu'),
        $('.header-nav').toggleClass('header-nav-show')
    });
    // Locatios toggle
   $('.location-button').on('click', function(){
    var id = $(this).data('show')

    $(id).toggleClass('location-info-item-show')
        .siblings('div').removeClass('location-info-item-show');
    });

   });
 