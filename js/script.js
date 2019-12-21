$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000
  });

  var typed = new Typed('.typed', {
    strings: [
      'Software Test Engineer',
      'DevOps Enthusiast',
      'Shift-Left Advocate'
    ],
    typeSpeed: 50,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $('.skillSection').offset().top;
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
      $('.chart').easyPieChart({
        easing: 'easingInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }
  });

  $('[data-fancybox]').fancybox();

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1400,
      easing: 'linear',
      queue: false
    }
  });

  $('#filters a').click(function() {
    $('#filter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1400,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
});
