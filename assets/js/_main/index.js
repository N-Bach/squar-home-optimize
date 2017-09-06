var details = {
  products: [
    {
      name: 'MyChat',
      description: 'Chat app & more'
    },
    {
      name: 'Mingalarbar Morning',
      description: 'News aggregator site'
    },
    {
      name: 'FastSell',
      description: 'Marketplace app'
    },
    {
      name: 'CallHome',
      description: 'VOIP app'
    },
    {
      name: 'Land Of Magic',
      description: 'Massively multiplayer game'
    },
    {
      name: 'My Hero - Bo Lattae',
      description: 'Third-person shooter game'
    },
    {
      name: 'Lucky Wingabar',
      description: 'Casino games'
    },
    {
      name: 'Hawk Hero',
      description: 'Martial arts game'
    },
    {
      name: 'MyFish',
      description: 'Fish hunting game'
    }
  ]
};

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '350px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

function scrollDown() {
  $.fn.fullpage.moveSectionDown();
}

function scrollTop() {
  $.fn.fullpage.moveTo(1);
}

function addScrollDown() {
  $('#scroll-down')
    .off('click')
    .click(scrollDown);
  $('#text-scroll-down')
    .off('click')
    .click(scrollDown);
}

function addScrollTop() {
  $('#scroll-down')
    .off('click')
    .click(scrollTop);
  $('#text-scroll-down')
    .off('click')
    .click(scrollTop);
}

function switchThemeDark(index) {
  $('#ic-hamburger').attr('src', 'img/icon/ic-menu-dark.png');
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll-yellow.gif');
  $('#text-scroll-down').css('color', 'black');
  $('#fp-nav')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-unactive-dark.png)');
  $('#fp-nav li:nth-child(' + index + ')')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-active.png)');
}

function switchThemeLight() {
  $('#ic-hamburger').attr('src', 'img/icon/ic-menu.png');
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll.gif');
  $('#text-scroll-down').css('color', 'white');
  $('#fp-nav')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-unactive.png)');
  $('#fp-nav li:first-child')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-active.png)');
}

function updateThemeDark(index, nextIndex) {
  $('#fp-nav li:nth-child(' + index + ')')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-unactive-dark.png)');
  $('#fp-nav li:nth-child(' + nextIndex + ')')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-active.png)');
}

function updateScrollText(text) {
  $('#text-scroll-down').html(text);
}

function updateScrollIndicatorUp() {
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll-up.gif');
}

function updateScrollIndicatorLight() {
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll.gif');
  $('#text-scroll-down').css('color', 'white');
}

function updateScrollIndicatorDark() {
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll-yellow.gif');
  $('#text-scroll-down').css('color', 'black');
}

function setProductText(title, des) {
  $('#pro-title').html(title);
  $('#pro-des').html(des);
}

function setNavigator(casourel) {
  $('#nav-left').click(casourel.prev);
  $('#nav-right').click(casourel.next);
}

function setupCasourel() {
  var carousel = $('.carousel').waterwheelCarousel({
    autoPlay: 1700,
    keyboardNav: true,
    forcedImageWidth: 250,
    forcedImageHeight: 460,
    separation: 200,
    opacityMultiplier: 1,
    clickedCenter: function($clickedItem) {},
    movedToCenter: function($newCenterItem) {
      // $newCenterItem is a jQuery wrapped object describing the image that was clicked.
      var imageID = $newCenterItem.attr('alt'); // Get the HTML element "id" for this image. Let's say it's "tigerpicture"
      var index = $newCenterItem.attr('alt').split(' ')[1];
      var product = details.products[index - 1];
      setProductText(product.name, product.description);
    },
    movedFromCenter: function($leavItem) {
      $leavItem.css('filter', 'brightness(60%)');
    }
  });

  setNavigator(carousel);
}

function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
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

$(document).ready(function() {
  setNavBehavior();
  var isCasourelUp = false;
  var $isAnimatedSecond = $('#section2 .is-animated');
  var $isAnimatedThird = $('#section3 .is-animated');
  var $isAnimatedFourth = $('#section4 .is-animated');
  var $isAnimatedFifth = $('#section5 .is-animated');
  // console.log(details);
  addScrollDown();
  // setupCasourel();

  // console.log(carousel);
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    responsiveWidth: 1100,
    scrollingSpeed: 550,
    onLeave: function(index, nextIndex, direction) {
      closeNav();
      var leavingSection = $(this);

      // console.log(window.innerWidth);

      if (window.innerWidth > 1100) {
        if (nextIndex === 1) {
          switchThemeLight();
        } else {
          if (index === 1) {
            switchThemeDark(nextIndex);
          } else {
            updateThemeDark(index, nextIndex);
          }
        }

        if (nextIndex === 2) {
          $isAnimatedSecond
            .eq(0)
            .addClass('animated fadeIn')
            .css('animation-delay', '.4s');
          $isAnimatedSecond
            .eq(1)
            .addClass('animated fadeIn')
            .css('animation-delay', '.6s');
          $isAnimatedSecond
            .eq(2)
            .addClass('animated fadeIn')
            .css('animation-delay', '.7s');
          $isAnimatedSecond
            .eq(3)
            .addClass('animated fadeIn')
            .css('animation-delay', '.8s');
          $isAnimatedSecond
            .eq(4)
            .addClass('animated fadeIn')
            .css('animation-delay', '1s');
        }

        if (nextIndex === 3) {
          $isAnimatedThird
            .eq(0)
            .addClass('animated fadeIn')
            .css('animation-delay', '.4s');
          $isAnimatedThird
            .eq(1)
            .addClass('animated fadeIn')
            .css('animation-delay', '.6s');
          // card list
          $isAnimatedThird
            .eq(2)
            .addClass('animated fadeIn')
            .css('animation-delay', '.8s');
          $isAnimatedThird
            .eq(3)
            .addClass('animated fadeIn')
            .css('animation-delay', '.9s');
          $isAnimatedThird
            .eq(4)
            .addClass('animated fadeIn')
            .css('animation-delay', '1s');
          $isAnimatedThird
            .eq(5)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.1s');
          $isAnimatedThird
            .eq(6)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.2s');
          $isAnimatedThird
            .eq(7)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.3s');
        }

        if (nextIndex === 4) {
          if (!isCasourelUp) {
            setupCasourel();
            isCasourelUp = true;
          }
          $isAnimatedFourth
            .eq(0)
            .addClass('animated fadeIn')
            .css('animation-delay', '.5s');
          $isAnimatedFourth
            .eq(1)
            .addClass('animated fadeIn')
            .css('animation-delay', '.7s');
          $isAnimatedFourth
            .eq(2)
            .addClass('animated fadeIn')
            .css('animation-delay', '.7s');
          $isAnimatedFourth
            .eq(3)
            .addClass('animated fadeIn')
            .css('animation-delay', '1s');
          $isAnimatedFourth
            .eq(4)
            .addClass('animated fadeIn')
            .css('animation-delay', '1s');
          $isAnimatedFourth
            .eq(5)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.3s');
        }

        if (nextIndex === 5) {
          $isAnimatedFifth
            .eq(0)
            .addClass('animated fadeIn')
            .css('animation-delay', '.5s');
          $isAnimatedFifth
            .eq(1)
            .addClass('animated fadeIn')
            .css('animation-delay', '.7s');
          // jobs
          $isAnimatedFifth
            .eq(2)
            .addClass('animated fadeIn')
            .css('animation-delay', '1s');
          $isAnimatedFifth
            .eq(3)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.2s');
          $isAnimatedFifth
            .eq(4)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.3s');
          $isAnimatedFifth
            .eq(5)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.4s');
          $isAnimatedFifth
            .eq(6)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.5s');
          $isAnimatedFifth
            .eq(7)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.6s');
          $isAnimatedFifth
            .eq(8)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.7s');
          $isAnimatedFifth
            .eq(9)
            .addClass('animated fadeIn')
            .css('animation-delay', '1.8s');
        }

        if (nextIndex === 5) {
          updateScrollText('Back to top');
          updateScrollIndicatorUp();
          addScrollTop();
        } else if (index === 5) {
          updateScrollText('Scroll Down');
          addScrollDown();
          if (nextIndex === 1) {
            updateScrollIndicatorLight();
          } else {
            updateScrollIndicatorDark();
          }
        }
      } else {
        //end of screen detecting
        if (!isCasourelUp) {
          setupCasourel();
          isCasourelUp = true;
        }
      }
    }
  });

  $('#fp-nav').addClass('animated fadeInRight');
  $('.center-screen')
    .addClass('spin-circle-animate animated fadeIn')
    .one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('spin-circle-animate animated fadeIn');
        $(this).addClass('spin-circle');
      }
    );
});
