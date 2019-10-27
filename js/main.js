$(document).ready(function () {
    $('.lang').click(function () {
        if($(this).hasClass('selected')) {
            return
        } else {
            $('.lang').each(function () {
                $(this).removeClass('selected')
            })
            $(this).addClass('selected')
        }
    })



    // $('.form').submit(function (e) {
    //     e.preventDefault();
    //     var inputs = $(this).find('input');
    //     let errObj = {
    //         0: 'Це поле не можу бути пустим!',
    //         1: 'Перевірте правильність вводу!'
    //     };
    //
    //     for(let i = 0; i < inputs.length; i++) {
    //         let input = inputs[i];
    //         if(input.value.length < 1) {
    //             input.nextElementSibling.classList.add('show');
    //             input.nextElementSibling.textContent = errObj[0];
    //             input.classList.add('err')
    //         }
    //         if(input.name === 'name') {
    //             if(input.value.length < 1) {
    //                 input.nextElementSibling.classList.add('show');
    //                 input.nextElementSibling.textContent = errObj[0];
    //                 input.classList.add('err')
    //             } else {
    //                 input.nextElementSibling.classList.remove('show');
    //                 input.nextElementSibling.textContent = errObj[0];
    //                 input.classList.remove('err')
    //             }
    //         }
    //         if(input.name === 'mail') {
    //             let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //             if(re.test(input.value)) {
    //                 input.classList.remove('err');
    //                 input.nextElementSibling.classList.remove('show');
    //                 input.nextElementSibling.textContent = '';
    //             } else {
    //                 input.nextElementSibling.textContent = errObj[1];
    //             }
    //         }
    //         if(input.name === 'phone') {
    //             let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    //             if(re.test(input.value)) {
    //                 input.classList.remove('err');
    //                 input.nextElementSibling.textContent = '';
    //                 input.nextElementSibling.classList.remove('show');
    //             } else {
    //                 input.nextElementSibling.classList.add('show');
    //                 input.nextElementSibling.textContent = errObj[1];
    //             }
    //         }
    //     }
    // })

    $('.form').submit(function (e) {
        e.preventDefault();
        let inputs = $(this).find('input');
        let errList = [];
        formValidation(inputs, errList)
    });

    function formValidation(inputs, errList) {
        let errObj = {
            0: 'Це поле не можу бути пустим!',
            1: 'Перевірте правильність вводу!'
        };

        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].value.length < 1) {
                $(inputs[i]).next().text(errObj[0]).addClass('show');
                $(inputs[i]).addClass('err');
                errList.push('lengthErr')
            } else {
                if(inputs[i].name === 'mail') {
                    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(re.test(inputs[i].value)) {
                        $(inputs[i]).removeClass('err');
                        $(inputs[i]).next().text('').removeClass('show');
                    } else {
                        $(inputs[i]).addClass('err');
                        $(inputs[i]).next().text(errObj[1]).addClass('show');
                        errList.push('mailErr')
                    }
                }
                if(inputs[i].name === 'phone') {
                    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                    if(re.test(inputs[i].value)) {
                        $(inputs[i]).removeClass('err');
                        $(inputs[i]).next().text('').removeClass('show');
                    } else {
                        $(inputs[i]).addClass('err');
                        $(inputs[i]).next().text(errObj[1]).addClass('show');
                        errList.push('phoneErr')
                    }
                }
            }
        }
        if(errList.length === 0) {
            console.log('can be send')
        }
    }


    function sliderInit(slider, toShow) {
        $(slider).slick({
            infinite: true,
            dots: false,
            slidesToShow: toShow,
            slidesToScroll: toShow,
            arrows: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }

    sliderInit('.slider_stage', 2);
    sliderInit('.slider_team', 1);
    
    AOS.init();
    
    function menuToggle() {
        let mnuBtn = $('.menu_btn'),
            mnu = $('.right_block'),
            root = $('.root');
        mnuBtn.click(function () {
            if(mnu.hasClass('open')) {
                mnu.removeClass('open')
                root.removeClass('blurred')
            } else {
                mnu.addClass('open')
                root.addClass('blurred')
            }
        })
    }

    menuToggle();
})