/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '350px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

var nav = $('#nav');
var sticky = 'sticky';
var header = $('.header').height();
var container = $('.container');
var breadcrumb = $('.breadcrum-container');
var hamburger = $('#hamburger');

function makeHamburgerSticky() {
  hamburger.addClass('sticky-sidenav');
  $('#ic-hamburger').attr('src', 'img/icon/ic-menu-dark.png');
}

function makeHamburgerNotSticky() {
  hamburger.removeClass('sticky-sidenav');
  $('#ic-hamburger').attr('src', 'img/icon/ic-menu.png');
}

function makeBreadcrumbSticky() {
  breadcrumb.addClass('sticky-crumb');
  $('.ic-home').attr('src', 'img/icon/ic-home.png');
}

function makeBreadcrumbNotSticky() {
  breadcrumb.removeClass('sticky-crumb');
  $('.ic-home').attr('src', 'img/icon/ic-home-white.png');
}

function makeSticky() {
  nav.addClass(sticky);
  container.css('margin-top', '56px');

  makeBreadcrumbSticky();
  makeHamburgerSticky();
}

function makeNotSticky() {
  nav.removeClass(sticky);
  container.css('margin-top', '0px');

  makeBreadcrumbNotSticky();
  makeHamburgerNotSticky();
}

// sticky nav
$(window).scroll(function() {
  if ($(this).scrollTop() > header) {
    makeSticky();
  } else {
    makeNotSticky();
  }
});

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

function openCity(evt, tabName) {
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

// close nav bar when clicking out side of the nav
function setNavBehavior() {
  $(document).click(function(e) {
    var sidenav = $('#mySidenav');
    if (
      e.target.id !== 'ic-hamburger' &&
      !sidenav.is(e.target) &&
      sidenav.has(e.target).length === 0
    ) {
      closeNav();
    }
  });
}

document.getElementById('defaultOpen').click();
$(document).ready(function() {
  setNavBehavior();
});
