var multiple = false;
$('.item').on('click', function () {
    $(this).toggleClass('active');
    $(this).find('ul').stop().slideToggle();
    if (!multiple) {
        $(this).siblings().removeClass('active').find('ul').slideUp()
    }
});
$('.item li').on('click', function () {
    return false
});