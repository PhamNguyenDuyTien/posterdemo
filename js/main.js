$('#toggleMenu').click(function() {
    $('#menu').toggle(150);
    $(this).toggleClass('active-icon-menu');
});

$('#icon-sub-menu').click(function() {
    $('#icon-sub-menu + .sub-menu').toggle(150);
    $(this).toggleClass('active-icon-submenu');
});



$(window).scroll(function () {
    let position = 70;

    if (window.scrollY >= position) {
        $('header .header_content').addClass('header_menu_fixed')
    } else {
        $('header .header_content').removeClass('header_menu_fixed')
    }
});

$('#btnSearchClick, #closeFormSearch').click(function() {
    $('.modal_search').toggle(200);
});

// $('#closeFormSearch').click(function() {
//     $('.modal_search').toggle(200);
// });
