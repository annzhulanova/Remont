$(document).ready(()=>{
    $('.review-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.open-image').magnificPopup({
        type: 'image'
    });
    new WOW({
        animateClass: 'animate__animated'
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
    /*
    $('#main-link').click(() => {
        $('#second-page').css('display', 'block');
        $('#first-page').hide();
    });
    $('#second-link').click(() => {
        $('#first-page').css('display', 'block');
        $('#second-page').hide();
    });*/




















})