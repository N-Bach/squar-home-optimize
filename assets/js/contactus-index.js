(function() {
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

  $(document).ready(function() {
    setNavBehavior();
  });
})();
