"use strict";

$(document).ready(function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  var body = document.querySelector('body');
  $('.menu__item--has-children').click(function (event) {
    $('.menu__item--has-children').not($(this)).removeClass('active');
    $('.menu__item--has-children').not($(this)).children('.sub-menu').slideUp(400);
    $(this).toggleClass('active').children('.sub-menu').slideToggle(400);
  });
});