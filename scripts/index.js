console.log('Welcome')



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.3,
    spaceBetween: 30,
});

var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 4,
    spaceBetween: 25,
});

var swiper = new Swiper(".mySwiperThree", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        // disableOnInteraction: false,
    },
});



let dropdownHead = document.querySelectorAll('.questions__item-header');
let dropdownBody = document.querySelectorAll('.questions__item-body');

for (let i = 0; i < dropdownHead.length; i++) {
    dropdownHead[i]?.addEventListener('click', () => {
        dropdownBody[i].classList.toggle('active');
    })
}

dropdownHead?.addEventListener('click', () => {
    dropdownBody.classList.toggle('active');
    console.log('hello')
})