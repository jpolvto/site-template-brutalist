/*
 * Handles toggling the navigation menu for small screens.
 */

jQuery(document).ready(function(){
  jQuery('.site-nav-mobile-wrapper').hide();
  jQuery('.toggle-nav-open').click(function () {
      jQuery('.site-nav-mobile-wrapper').slideToggle(300);
});
});

jQuery(document).ready(function(){
  jQuery('.toggle-nav-close').click(function () {
    jQuery('.site-nav-mobile-wrapper').slideToggle(300);
});
});