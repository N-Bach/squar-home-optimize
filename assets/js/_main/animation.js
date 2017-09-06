var left = $('.is-animated-left');
var right = $('.is-animated-right');

$(document).ready(function() {
  left.addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
  });
  right.addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
  });
});
