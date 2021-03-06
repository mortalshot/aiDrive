$('.header__burger-wrapper').click(function (event) {
    $('.header__burger-wrapper, .header__burger, .header__menu').toggleClass('active');
    $('body').addClass('lock');
});

$('.header__burger--menu').click(function (event) {
    $('.header__burger-wrapper, .header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
});

$('.header__menu .menu__item--has-children').click(function (event) {
    $('.header__menu .menu__item--has-children').not($(this)).removeClass('active');
    $('.header__menu .menu__item--has-children').not($(this)).children('.sub-menu').slideUp(400);
    $(this).toggleClass('active').children('.sub-menu').slideToggle(400);
})

$(document).mouseup(function (e) {
    var div = $(".header__menu .menu__item--has-children");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $(".header__menu .menu__item--has-children .sub-menu").slideUp(400);
        $('.header__menu .menu__item--has-children').removeClass('active');
    }
});