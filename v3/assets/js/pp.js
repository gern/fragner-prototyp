function initNavbar() {
  if ($(".pp-nav-fade").length) {
    $("img.dark-logo").hide();

    $(window).on("scroll", function () {
      var height = $(window).scrollTop();
      if (height > 80) {
        var nav = $(".pp-nav-fade.navbar-dark");
        if (nav.length) {
          nav
            .removeClass("navbar-dark bg-primary")
            .addClass("navbar-light bg-white");
          $("img.dark-logo").show();
          $("img.light-logo").hide();
        }
      } else {
        var nav = $(".pp-nav-fade.navbar-light");
        if (nav.length) {
          nav
            .removeClass("navbar-light bg-white")
            .addClass("navbar-dark bg-primary");
          $("img.dark-logo").hide();
          $("img.light-logo").show();
        }
      }
    });
  }
}
