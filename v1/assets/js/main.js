/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file
========================================================================== */
"use strict";

initPageLoader();
$(document).ready(function ($) {
  disableSidebarLinks();
  initNavbar();
  initMobileMenu();
  initSidebar();
  initTabs();
  initScrollReveal();
  highlightNavbarLinks();
  initPopovers();
  initTooltips();
  initBackToTop();
  initScrollToHash();
  initGitem();
  initBackgroundImages();
  initContactToggler();

  if ($(".pricing-hero").length) {
    initPricing();
  }
});