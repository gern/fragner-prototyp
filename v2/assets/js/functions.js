"use strict";

//Init pageloader
function initPageLoader() {
  $('.pageloader').toggleClass('is-active');
  $(window).on('load', function () {
    var pageloaderTimeout = setTimeout(function () {
      $('.pageloader').toggleClass('is-active');
      $('.infraloader').toggleClass('is-active');
      clearTimeout(pageloaderTimeout);
      setTimeout(function () {
        $('.rounded-hero').addClass('is-active');
      }, 350);
    }, 700);
  });
} //Disable sidebar links in development


function disableSidebarLinks() {
  $('.navigation-menu .is-submenu').each(function () {
    $(this).attr('href', 'javascript:void(0);');
  });
} //
//Init navbar


function initNavbar() {
  //Navbar fade
  if ($('.navbar-wrapper.navbar-fade.navbar-light').length) {
    $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
    $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
    $(window).on('scroll', function () {
      var height = $(window).scrollTop();

      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent navbar-light').addClass('navbar-faded');
      } else {
        $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent navbar-light');
      }
    });
  } //Navbar fade


  if ($('.navbar-wrapper.navbar-fade.navbar-default').length) {
    $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
    $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
    $(window).on('scroll', function () {
      var height = $(window).scrollTop();

      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent').addClass('navbar-faded');
      } else {
        $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent');
      }
    });
  } //Navbar Clone


  if ($('.is-cloned').length) {
    $(window).scroll(function () {
      var height = $(window).scrollTop();

      if (height > 50) {
        $(".is-cloned").addClass('is-active');
      } else {
        $(".is-cloned").removeClass('is-active');
      }
    });
  }
} //Mobile menu toggle


function initMobileMenu() {
  $('.custom-burger').on("click", function () {
    var menu_id = $(this).attr('data-target');
    $(this).toggleClass('is-active');
    $("#" + menu_id).toggleClass('is-active');
    $('.navbar.navbar-light').toggleClass('is-dark-mobile');
  });
  $('.custom-burger').on('click', function () {
    $(this).find('.icon-box-toggle').toggleClass('active');
  });
} //Highlight current page navbar menu item


function highlightNavbarLinks() {
  // Get current page URL
  var url = window.location.href; // remove # from URL

  url = url.substring(0, url.indexOf("#") == -1 ? url.length : url.indexOf("#")); // remove parameters from URL

  url = url.substring(0, url.indexOf("?") == -1 ? url.length : url.indexOf("?")); // select file name

  url = url.substr(url.lastIndexOf("/") + 1); // If file name not available

  if (url == '') {
    url = 'index.html';
  } // Loop all menu items


  $('.nav .navbar-item, li.has-children ul li a.is-submenu, a.footer-nav-link').each(function () {
    // select href
    var href = $(this).attr('href'); // Check filename

    if (url == href) {
      // Add active class
      $(this).addClass('is-active');
    }
  });
} //Init Sidebar


function initSidebar() {
  $(".navigation-menu > li.has-children a.parent-link").on("click", function (i) {
    i.preventDefault();

    if (!$(this).parent().hasClass("active")) {
      $(".navigation-menu li ul").slideUp();
      $(this).next().slideToggle();
      $(".navigation-menu li").removeClass("active");
      $(this).parent().addClass("active");
    } else {
      $(this).next().slideToggle();
      $(".navigation-menu li").removeClass("active");
    }
  }); //sidebar category toggle

  $('.category-link').on("click", function () {
    $('.category-link.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  }); //Sidebar close button

  $('.hamburger-btn').on("click", function () {
    $('#navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle, .navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle').toggleClass('active');
  }); //Menu buttons sync

  $('#navigation-trigger, .navigation-trigger, .navigation-close').on("click", function () {
    $('.side-navigation-menu').toggleClass('is-active');
  }); //Data navigation menu setup

  $('.category-link').on("click", function () {
    var category_id = $(this).attr('data-navigation-menu');
    $('.navigation-menu-wrapper').addClass('is-hidden');
    $("#" + category_id).removeClass('is-hidden');
  }); //Manage close links visibility to display only one at a time

  $('.side-navigation-menu').on("mouseenter", function () {
    $('#navigation-trigger').css('opacity', '0');
    $('.navigation-close').css('opacity', '1');
  });
  $('.side-navigation-menu').on("mouseleave", function () {
    $('#navigation-trigger').css('opacity', '1');
    $('.navigation-close').css('opacity', '0');
  });
} //Testimonials


function initTestimonials() {
  if ($('.styled-testimonials').length) {
    $('.styled-testimonials').slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      autoplay: true,
      arrows: false
    });
  }
} //Init Scroll Reveal


function initScrollReveal() {
  // Declaring defaults
  window.sr = ScrollReveal(); // Simple reveal

  sr.reveal('.is-title-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2
  }); // Revealing multiple cards

  sr.reveal('.is-card-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.2
  }, 160);
} //Popovers


function initPopovers() {
  if ($('[data-toggle="popover"]').length) {
    $('[data-toggle="popover"]').ggpopover();
  }
} //Tooltips


function initTooltips() {
  if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').ggtooltip();
  }
} //Init attribute background images


function initBackgroundImages() {
  $(".has-background-image").each(function () {
    var bgImage = $(this).attr('data-background');

    if (bgImage !== undefined) {
      $(this).css('background-image', 'url(' + bgImage + ')');
    }
  });
} //Back to top button


function initBackToTop() {
  var pxShow = 600;
  var scrollSpeed = 500;
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      $("#backtotop").addClass('visible');
    } else {
      $("#backtotop").removeClass('visible');
    }
  });
  $('#backtotop a').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  });
} //Gelatine items


function initGitem() {
  $('.g-item').on("mouseenter", function () {
    $(this).addClass('gelatine');
  });
  $('.g-item').on("mouseleave", function () {
    $(this).removeClass('gelatine');
  });
} //Scroll to hash


function initScrollToHash() {
  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').on('click', function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 550, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }

          ;
        });
      }
    }
  });
} //Navigation dots


function initNavigationDots() {
  $('.slide-dot').on('click', function () {
    var text = $(this).attr('data-feature-text');
    var image = $(this).attr('data-feature');
    $('.showcase-wrap').removeClass('is-active');
    $('.showcase-text-wrapper').addClass('is-hidden');
    $('#' + text).removeClass('is-hidden');
    $('#' + image).addClass('is-active');
    $('.slide-dot.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  });
} //Contact toggler


function initContactToggler() {
  $('.tabbed-links li').on('click', function () {
    var target = $(this).attr('data-contact');
    $('.contact-block').addClass('is-hidden');
    $('#' + target).removeClass('is-hidden');
    $('.tabbed-links li.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  });
} //Init pricing


function initPricing() {
  if ($('.switch-pricing-wrapper').length) {
    $('.pricing-switcher input').on('change', function () {
      $('.plan-price').toggleClass('is-active');
    });
  }
} //Init auth page


function initAuth() {
  $('#goRight').on('click', function () {
    $('#slideBox').animate({
      'marginLeft': '0'
    });
    $('.topLayer').animate({
      'marginLeft': '100%'
    });
  });
  $('#goLeft').on('click', function () {
    if (window.innerWidth > 769) {
      $('#slideBox').animate({
        'marginLeft': '50%'
      });
    } else {
      $('#slideBox').animate({
        'marginLeft': '20%'
      });
    }

    $('.topLayer').animate({
      'marginLeft': '0'
    });
  });
} //Init auth page paper.js


function initPaperJs() {
  paper.install(window);
  paper.setup(document.getElementById("canvas")); // Paper JS Variables

  var canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;
  var shapeGroup = new Group();
  var positionArray = [];

  function getCanvasBounds() {
    // Get current canvas size
    canvasWidth = view.size.width;
    canvasHeight = view.size.height;
    canvasMiddleX = canvasWidth / 2;
    canvasMiddleY = canvasHeight / 2; // Set path position

    var position1 = {
      x: canvasMiddleX / 2 + 100,
      y: 100
    };
    var position2 = {
      x: 200,
      y: canvasMiddleY
    };
    var position3 = {
      x: canvasMiddleX - 50 + canvasMiddleX / 2,
      y: 150
    };
    var position4 = {
      x: 0,
      y: canvasMiddleY + 100
    };
    var position5 = {
      x: canvasWidth - 130,
      y: canvasHeight - 75
    };
    var position6 = {
      x: canvasMiddleX + 80,
      y: canvasHeight - 50
    };
    var position7 = {
      x: canvasWidth + 60,
      y: canvasMiddleY - 50
    };
    var position8 = {
      x: canvasMiddleX + 100,
      y: canvasMiddleY + 100
    };
    positionArray = [position3, position2, position5, position4, position1, position6, position7, position8];
  }

  ;
  /* ====================== *
   * Create Shapes          *
   * ====================== */

  function initializeShapes() {
    // Get Canvas Bounds
    getCanvasBounds();
    var shapePathData = ['M231,352l445-156L600,0L452,54L331,3L0,48L231,352', 'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z', 'M0,65l16,138l96,107l270-2L470,0L337,4L0,65z', 'M333,0L0,94l64,219L29,437l570-151l-196-42L333,0', 'M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z', 'M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352', 'M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100', 'M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 '];

    for (var i = 0; i <= shapePathData.length; i++) {
      // Create shape
      var headerShape = new Path({
        strokeColor: 'rgba(255, 255, 255, 0.5)',
        strokeWidth: 2,
        parent: shapeGroup
      }); // Set path data

      headerShape.pathData = shapePathData[i];
      headerShape.scale(2); // Set path position

      headerShape.position = positionArray[i];
    }
  }

  ;
  initializeShapes();
  /* ====================== *
   * Animation              *
   * ====================== */

  view.onFrame = function paperOnFrame(event) {
    if (event.count % 4 === 0) {
      // Slows down frame rate
      for (var i = 0; i < shapeGroup.children.length; i++) {
        if (i % 2 === 0) {
          shapeGroup.children[i].rotate(-0.1);
        } else {
          shapeGroup.children[i].rotate(0.1);
        }
      }
    }
  };

  view.onResize = function paperOnResize() {
    getCanvasBounds();

    for (var i = 0; i < shapeGroup.children.length; i++) {
      shapeGroup.children[i].position = positionArray[i];
    }

    if (canvasWidth < 700) {
      shapeGroup.children[3].opacity = 0;
      shapeGroup.children[2].opacity = 0;
      shapeGroup.children[5].opacity = 0;
    } else {
      shapeGroup.children[3].opacity = 1;
      shapeGroup.children[2].opacity = 1;
      shapeGroup.children[5].opacity = 1;
    }
  };
}