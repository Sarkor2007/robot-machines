console.log('Welcome')



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1275: {
            slidesPerView: 3.3,
            spaceBetween: 25,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        580: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        }
    },
});

var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        1270: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        790: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        }
    },
});

var swiper = new Swiper(".mySwiperThree", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1000: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        670: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});



const dropdownHead = document.querySelectorAll('.questions__item-header');
const dropdownBody = document.querySelectorAll('.questions__item-body');

for (let i = 0; i < dropdownHead.length; i++) {
    dropdownHead[i]?.addEventListener('click', () => {
        dropdownBody[i].classList.toggle('active');
    })
}



const navBtn = document.querySelector('.nav__open');
const navBar = document.querySelector('.nav');
const navOpen = document.querySelector('.nav__open-btn');
const filter = document.querySelector('.filter');
const navListItem = document.querySelectorAll('.nav__list-link');
const navExit = document.querySelector('.nav__exit-btn');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    filter.classList.toggle('active');
    navOpen.classList.toggle('active');
})

filter.addEventListener('click', () => {
    navBar.classList.remove('active');
    filter.classList.remove('active');
    navOpen.classList.remove('active');
});


navExit.addEventListener('click', () => {
    navBar.classList.remove('active');
    filter.classList.remove('active');
    navOpen.classList.remove('active');
});


navListItem.forEach(el => {
    el.addEventListener('click', () => {
        navBar.classList.remove('active');
        filter.classList.remove('active');
        navOpen.classList.remove('active');
    })
});






function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -150;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 150;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); 

        ScrollTrigger.create({
            trigger: elem,
            // markers: true,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) }
        });
    });
});
