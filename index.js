document.addEventListener('scroll', function (event) {
    var hT = $('.div-quemsomos').offset().top,
    hH = $('.div-quemsomos').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        $('.header').addClass('bg-black')
    } else {
        $('.header').removeClass('bg-black')
    }
}, true);

$('#ref-inicio').on('click', () => {
    window.scrollTo({top:0, behavior: "smooth"});
})

$('#ref-quemsomos').on('click', () => {
    $('.div-quemsomos').get(0).scrollIntoView({behavior:"smooth"});
})

$('#ref-equipe').on('click', () => {
    $('.div-equipe').get(0).scrollIntoView({behavior:"smooth"});
})

$('#ref-contato').on('click', () => {
    $('.div-contato').get(0).scrollIntoView({behavior:"smooth"});
})