function sliderInit(slider, toShow) {
    $(slider).slick({
        infinite: true,
        dots: false,
        slidesToShow: toShow,
        slidesToScroll: toShow,
        arrows: false,
        autoplay: false
    })
}

sliderInit('.slider_stage', 2);
sliderInit('.slider_team', 1);

function sliderControl(element,direction) {
    $(element).slick('slick' + direction);
}

$('.prev').click(function () {
    sliderControl('.slider_stage','Prev')
})

$('.next').click(function () {
    sliderControl('.slider_stage','Next')
})

$('.prev_tm').click(function () {
    sliderControl('.slider_team','Prev')
})

$('.next_tm').click(function () {
    sliderControl('.slider_team','Next')
})