var swiper = new Swiper('.bannerDF', {        
    slidesPerGroup: 1,
    slidesPerView: 10,
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