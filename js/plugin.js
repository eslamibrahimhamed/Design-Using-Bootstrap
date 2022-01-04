$(document).ready(function () {
  // lazy loading for Images
  $(function () {
    $("img").unveil(100);
  });

  // Show Section About US
  $(window).on("scroll", function () {
    var sc = $(window).scrollTop(),
      top = $(".about");
    if (sc >= 100) {
      top.css({
        display: "block",
      });
    }
  });

  // scroll Top With Button
  $(window).on("scroll", function () {
    var sc = $(window).scrollTop(),
      top = $(".scroll-top");
    if (sc >= 500) {
      top.css({
        transform: "translateY(-16px) scale(3, 3) rotate(360deg)",
        transition: "all 1s ease-in-out",
      });
    } else {
      top.css({
        transform: "translateY(50px) scale(0, 0)",
      });
    }
  });

  $(".scroll-top").click(function () {
    $("html ,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // Adjust slider Time
  $(".carousel").carousel({
    interval: 3000,
  });

  // Show Color & Hide Box
  var gear = $(".gear-check"),
    cont = $(".container"),
    color = $(".color-box");

  gear.click(function () {
    $(".color-box").toggle();

    cont.click(function () {
      $(".color-box").hide();
    });

    color.mouseleave(function () {
      $(this).fadeOut(3000);
    });

    color.mouseenter(function () {
      $(this).fadeIn();
    });
  });

  // Change Color li Of Color Box

  var colorLi = $(".color-box ul li");

  colorLi
    .eq(0)
    .css({ backgroundColor: "#e41b17" })
    .end()
    .eq(1)
    .css({ backgroundColor: "#4200ab" })
    .end()
    .eq(2)
    .css({ backgroundColor: "#407bff" })
    .end()
    .eq(3)
    .css({ backgroundColor: "#92831b" })
    .end()
    .eq(4)
    .css({ backgroundColor: "#279d86" });

  colorLi.click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });

  //Screen Loading
  $(window).load(function () {
    // loading Elements

    $(".loading-overlay .spinner").fadeOut(1500, function () {
      $("body").css({
        overflow: "auto",
      });
      $(".loading-overlay").fadeOut(1000, function () {
        // Show The Scroll

        $(this).remove();
      });
    });
  });
});
