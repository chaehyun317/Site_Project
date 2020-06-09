route("Main");

var swiper = new Swiper('.swiper-container', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination'
    }
})