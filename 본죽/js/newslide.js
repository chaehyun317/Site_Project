var swiper = new Swiper('.first', {        
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 80,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination first',
        clickable: true,
    },
});

var swiper = new Swiper('.second', {        
    // slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    // loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination second',
        clickable: true,
    },
});
