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
});
