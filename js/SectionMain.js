$(function () {
    $(".section_main").mouseenter(function () {
        $(this).find("a").stop().fadeIn();
    }).mouseleave(function () {
        $(this).find("a").stop().fadeOut();
    });
  });