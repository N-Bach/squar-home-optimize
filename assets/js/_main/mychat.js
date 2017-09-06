document.getElementById('defaultOpen').click();

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';
  setAnimate(tabName);
  evt.currentTarget.className += ' active';
}

function setAnimate(tabName) {
  var element = $('#' + tabName + ' .is-animated');
  var animationDelay = ['.1s', '.3s', '.4s'];

  element.map(function(item, index) {});
  if (element.eq(0).hasClass('animated')) {
    element.map(function(index, item) {
      element.eq(index).removeClass('fadeIn');
    });
  } else {
    element.map(function(index, item) {
      element
        .eq(index)
        .addClass('animated fadeIn')
        .css('animation-delay', animationDelay[index]);
    });
  }
}

var wrapper = $('#update .wrapper');
var stickyClass = 'sticky-mockup';

$(window).scroll(function() {
  // console.log($(this).scrollTop());
  if (wrapper.height() > 0 && $(this).scrollTop() > wrapper.height() + 14) {
    wrapper.addClass(stickyClass);
  } else {
    wrapper.removeClass(stickyClass);
  }
});
