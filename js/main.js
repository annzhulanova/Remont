$(document).ready(()=>{
    $('.review-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },

        ]
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth <= 768) {
            $('.examples-container').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            });
            sliderIsLive = true;
        }
        else {
            if (sliderIsLive) {
                $('.your-slider').slick('unslick');
                sliderIsLive = false;
            }
        }
    });

    $('.open-image').magnificPopup({
        type: 'image'
    });
    new WOW({
        animateClass: 'animate__animated',
        mobile: true
    }).init();

    $('.callback-action').click(() => {
        $('.callback-container').css('display', 'flex')
    });
    $('.callback-container, .popup-close').click((e) => {
        if (e.target.className === 'callback-container' || e.target.className === 'popup-close')
            $('.callback-container').hide();
    });
    $('.call-me').click(() => {
        let number = $('#callback-phone');
        let hasError = false;
        let input = $('.order-input');
        let error = $('.error-input');

        if (!number.val()) {
            number.siblings('.error-input').show();
            number.css('border-color', '#e94f4f');
            hasError = true;
        } else {
            if (number.val()) {
                $('.callback-sent').show();
                $('.callback').hide();

            }
            ;
        }
    });

    $('.burger').click(() => {
        $('.header-container .header-items').css('display', 'flex');
    });
    $('.header-items, .header-items a').click(() => {
        $('.header-container .header-items').hide();
    });



















})