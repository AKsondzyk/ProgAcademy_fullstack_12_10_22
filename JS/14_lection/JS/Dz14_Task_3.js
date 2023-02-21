// 3) Підключити до сторінки jQuery, і бібліотеку slick створити на сторінці слайдер на 5 зображень,
// при зменшені екрану до 1200px  повино ставати 3 картинки

$(document).ready(function () {
    $('.your-class').slick({
        arrows: false,
        // centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    });

    $('img').attr('style', 'width: 95%;');

});

