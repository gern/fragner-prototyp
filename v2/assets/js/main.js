/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file
========================================================================== */
"use strict";

initPageLoader();
$(document).ready(function ($) {
  disableSidebarLinks(); //();

  initNavbar();
  initMobileMenu();
  highlightNavbarLinks();
  initSidebar();
  initTestimonials();
  initNavigationDots();
  initContactToggler();
  initPricing();
  initScrollReveal();
  initPopovers();
  initTooltips();
  initBackgroundImages();
  initBackToTop();
  initGitem();
  initScrollToHash();
});