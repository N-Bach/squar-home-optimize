/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '350px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
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

// scroll to top
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
  $('#ic-hamburger').attr('src', '/img/icon/ic-menu-dark.png');
}

function makeHamburgerNotSticky() {
  hamburger.removeClass('sticky-sidenav');
  $('#ic-hamburger').attr('src', '/img/icon/ic-menu.png');
}

function makeBreadcrumbSticky() {
  breadcrumb.addClass('sticky-crumb');
  $('.ic-home').attr('src', '/img/icon/ic-home.png');
}

function makeBreadcrumbNotSticky() {
  breadcrumb.removeClass('sticky-crumb');
  $('.ic-home').attr('src', '/img/icon/ic-home-white.png');
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
  if (!isGame) {
    if ($(this).scrollTop() > header) {
      makeSticky();
    } else {
      makeNotSticky();
    }
  }
});

$(document).ready(function() {
  setNavBehavior();
});
