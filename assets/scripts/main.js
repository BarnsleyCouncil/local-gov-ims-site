$(document).ready(function() {
    // Init slider controls for homepage
    $('#carousel').slippry();

    // Accordion slider
    $('#slide').slippry({
        transition: 'horizontal', // fade, horizontal, kenburns, false
        speed: 1200,
        pause: 6000,
        pager: false,
        captions: false,
        start: 'random',
        autoDirection: 'next'
    });

        // Init Accordion
  $( function() {
    $( "#accordion" )
      .accordion({
        header: "h3.rich-text-title",
        heightStyle: "content",
        collapsible: true,
        active: false
      })
  } );


    // Modal page 
 
    $('.cd-see-all').on('click', function() {
        $('.cd-testimonials-all').addClass('is-visible');
    });
    $('.cd-testimonials-all .close-btn').on('click', function() {
        $('.cd-testimonials-all').removeClass('is-visible');
    });
    $(document).keyup(function(event) {
        if (event.which == '27') {
            $('.cd-testimonials-all').removeClass('is-visible');
        }
    });
    $('.cd-testimonials-all-wrapper').children('ul').masonry({
        itemSelector: '.cd-testimonials-item'
    });

    // Init Responsive menu
    $('.mobile-nav').meanmenu();


});