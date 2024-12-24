
const tabs = document.querySelectorAll('.quote-screen__tabs-tab');
const all_content = document.querySelectorAll('.conten');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        all_content.forEach(conten => {
            conten.classList.remove('active');
        })
        all_content[index].classList.add('active');
    })


})
function isMobile() {
    return window.innerWidth <= 768;
}
if (isMobile()) {
    let swiperCards = new Swiper(".swiper", {
        speed: 800,
        draggable: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: "auto",
        breakpoints: {
            992: {
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}