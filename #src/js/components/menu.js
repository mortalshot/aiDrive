$('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
})

const body = document.querySelector('body');

$('.header__menu .menu__item--has-children').click(function(event) {
    $('.header__menu .menu__item--has-children').not($(this)).removeClass('active');
    $('.header__menu .menu__item--has-children').not($(this)).children('.sub-menu').slideUp(400);
    $(this).toggleClass('active').children('.sub-menu').slideToggle(400);
})