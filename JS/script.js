$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: [
      "Web Developer",
      "Endeavoring Software Developer",
      "World Traveler",
      "Student"
    ],
    typeSpeed: 90,
    loop: true,
    startDelay: 100,
    showCursor: false
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 1500
  });
  $(".play").on("click", function() {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function() {
    owl.trigger("stop.owl.autoplay");
  });
});
